"use client";

import SeverityStatus from '@/app/features/admin/components/SeverityStatus';
import { useAuth } from '@/app/features/auth/api/AuthContext';
import { Event } from '@/app/features/auth/types/Event';
import LoadingPage from '@/components/LoadingPage';
import { Button } from '@/components/ui/button';
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import React, { useState } from 'react';
import { MdLocationOn, MdLocalShipping, MdDownload } from 'react-icons/md';

interface ClientEventDialogProps {
    event: Event;
}

const ClientEventDialog = ({ event }: ClientEventDialogProps) => {
    const { user } = useAuth();
    const [isExporting, setIsExporting] = useState(false);

    const createdAt = new Date(event.createdAt).toLocaleDateString('pt-BR');
    const time = new Date(event.createdAt).toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
    });

    const handleExportPDF = async () => {
        try {
            setIsExporting(true);

            const element = document.getElementById('pdf-printable-content');
            if (!element) return;

            const html2canvas = (await import('html2canvas-pro')).default;
            const { jsPDF } = await import('jspdf');

            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
                backgroundColor: '#131924',
                onclone: (clonedDoc: Document) => {
                    const styles = clonedDoc.querySelectorAll('style, link[rel="stylesheet"]');
                    styles.forEach(s => s.remove());
                }
            });

            const imgData = canvas.toDataURL('image/jpeg', 0.98);

            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4',
            });

            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();

            const imgWidth = pdfWidth;
            const imgHeight = (canvas.height * pdfWidth) / canvas.width;

            if (imgHeight <= pdfHeight) {
                pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
            } else {
                pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, pdfHeight);
            }

            pdf.save(`alerta-${event.id || '0001'}-${createdAt.replaceAll('/', '-')}.pdf`);

        } catch (error) {
            console.error('Erro ao gerar PDF:', error);
        } finally {
            setIsExporting(false);
        }
    };

    if (!event || !user) {
        return (
            <DialogContent className="sm:max-w-2xl bg-[#131924] border-[#262c3a] text-white p-6 rounded-2xl shadow-xl">
                <LoadingPage />
            </DialogContent>
        );
    }

    return (
        <DialogContent className="sm:max-w-2xl bg-[#131924] border-[#262c3a] text-white p-6 rounded-2xl shadow-xl">
            {/* 1. VISUAL DO MODAL (Como aparece para o utilizador no ecrã) */}
            <div className="space-y-4 p-2 max-h-[60vh] overflow-y-auto pr-1">
                <DialogHeader className="space-y-1">
                    <DialogTitle className="text-lg font-bold text-white">
                        Informações Alerta do dia {createdAt} às {time}
                    </DialogTitle>
                    <DialogDescription className="text-xs text-white/50">
                        Todas as informações passadas e repassadas durante o Alerta
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 my-2">
                    <div className="bg-[#1a2130] border-[#262c3a] flex items-center justify-between rounded-xl p-3 border">
                        <div className="flex items-center gap-3">
                            <div className="bg-[#1e3a5f] text-[#3b82f6] flex h-10 w-10 items-center justify-center rounded-lg">
                                <MdLocationOn className="h-5 w-5" />
                            </div>
                            <div>
                                <span className="text-xs font-medium text-white/40">Código: {event.protocol}</span>
                                <p className="text-sm font-semibold text-white">{event.address}</p>
                            </div>
                        </div>
                        <span className="rounded-md px-2.5 py-1 text-xs font-medium border bg-[#1e3a5f]/40 text-[#3b82f6] border-[#3b82f6]/30">
                            <SeverityStatus status={event.patientCondition} />
                        </span>
                    </div>

                    <div className="bg-[#1a2130] border-[#262c3a] flex items-center justify-between rounded-xl p-3 border">
                        <div className="flex items-center gap-3">
                            <div className="bg-[#133e22] text-[#22c55e] flex h-10 w-10 items-center justify-center rounded-lg">
                                <MdLocalShipping className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-white">Socorrista: {user.name}</p>
                                <span className="text-xs text-white/60">TEL - {user.phone}</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <div className="text-xs font-medium text-white/80">Pronto-Socorro à Retornar</div>
                            <div className="bg-[#1a2130] border-[#2d3545] text-white/90 flex items-center border text-sm px-3 h-11 rounded-xl">
                                {event.returnLocation}
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <div className="text-xs font-medium text-white/80">Consciência e Respiração</div>
                            <div className="bg-[#1a2130] border-[#2d3545] text-white/90 flex items-center border text-sm px-3 h-11 rounded-xl">
                                {event.injuryCondition}
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <div className="text-xs font-medium text-white/80">Causa</div>
                            <div className="bg-[#1a2130] border-[#2d3545] text-white/90 flex items-center border text-sm px-3 h-11 rounded-xl">
                                {event.whatHappened}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <div className="text-xs font-medium text-white/80">Observações</div>
                        <div className="bg-[#1a2130] border-[#2d3545] text-white/90 border text-sm p-3 min-h-[70px] rounded-xl flex items-center">
                            {event.observations}
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <div className="text-xs font-medium text-white/80">Endereço</div>
                        <div className="bg-[#1a2130] border-[#2d3545] text-white/90 border text-sm p-3 min-h-[70px] rounded-xl flex items-center">
                            {event.address}
                        </div>
                    </div>

                    <div className="text-center pt-2">
                        <span className="text-[10px] uppercase tracking-wider text-white/30">
                            Secretaria da Saúde de Marília — Uso restrito a funcionários autorizados
                        </span>
                    </div>
                </div>
            </div>

            {/* 2. TEMPLATE OCULTO EXCLUSIVO PARA O PDF (Com as variáveis dinâmicas corretas) */}
            <div style={{ position: 'absolute', left: '-9999px', top: '-9999px', width: '794px' }}>
                <div
                    id="pdf-printable-content"
                    style={{
                        backgroundColor: '#131924',
                        color: '#ffffff',
                        padding: '48px',
                        width: '794px',
                        minHeight: '1123px',
                        fontFamily: 'sans-serif',
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}
                >
                    <div>
                        <div style={{ marginBottom: '32px' }}>
                            <h2 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0 0 8px 0', color: '#ffffff' }}>
                                Informações Alerta do dia {createdAt} às {time}
                            </h2>
                            <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.5)', margin: 0 }}>
                                Todas as informações passadas e repassadas durante o Alerta
                            </p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div style={{ backgroundColor: '#1a2130', border: '1px solid #262c3a', padding: '18px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <div style={{ backgroundColor: '#1e3a5f', color: '#3b82f6', display: 'flex', height: '48px', width: '48px', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', flexShrink: 0 }}>
                                        <MdLocationOn style={{ height: '24px', width: '24px' }} />
                                    </div>
                                    <div>
                                        <span style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '12px', display: 'block' }}>Código: {event.protocol}</span>
                                        <p style={{ color: '#ffffff', fontSize: '16px', fontWeight: '600', margin: '2px 0' }}>{event.address}</p>
                                    </div>
                                </div>
                                <span style={{ backgroundColor: 'rgba(30, 58, 95, 0.4)', color: '#3b82f6', border: '1px solid rgba(59, 130, 246, 0.3)', padding: '6px 14px', fontSize: '13px', fontWeight: '500', borderRadius: '6px' }}>
                                    {event.patientCondition}
                                </span>
                            </div>

                            <div style={{ backgroundColor: '#1a2130', border: '1px solid #262c3a', padding: '18px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <div style={{ backgroundColor: '#133e22', color: '#22c55e', display: 'flex', height: '48px', width: '48px', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', flexShrink: 0 }}>
                                        <MdLocalShipping style={{ height: '24px', width: '24px' }} />
                                    </div>
                                    <div>
                                        <p style={{ color: '#ffffff', fontSize: '16px', fontWeight: '600', margin: '2px 0' }}>Socorrista: {user.name}</p>
                                        <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '13px', display: 'block' }}>TEL - {user.phone}</span>
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '13px', fontWeight: '500' }}>Pronto-Socorro à Retornar</span>
                                    <div style={{ backgroundColor: '#1a2130', border: '1px solid #2d3545', color: 'rgba(255, 255, 255, 0.9)', padding: '0 16px', height: '48px', borderRadius: '10px', display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                                        {event.returnLocation}
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '13px', fontWeight: '500' }}>Consciência e Respiração</span>
                                    <div style={{ backgroundColor: '#1a2130', border: '1px solid #2d3545', color: 'rgba(255, 255, 255, 0.9)', padding: '0 16px', height: '48px', borderRadius: '10px', display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                                        {event.injuryCondition}
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '13px', fontWeight: '500' }}>Causa</span>
                                    <div style={{ backgroundColor: '#1a2130', border: '1px solid #2d3545', color: 'rgba(255, 255, 255, 0.9)', padding: '0 16px', height: '48px', borderRadius: '10px', display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                                        {event.whatHappened}
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '13px', fontWeight: '500' }}>Observações</span>
                                <div style={{ backgroundColor: '#1a2130', border: '1px solid #2d3545', color: 'rgba(255, 255, 255, 0.9)', padding: '16px', minHeight: '70px', borderRadius: '10px', display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                                    {event.observations}
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '13px', fontWeight: '500' }}>Endereço</span>
                                <div style={{ backgroundColor: '#1a2130', border: '1px solid #2d3545', color: 'rgba(255, 255, 255, 0.9)', padding: '16px', minHeight: '70px', borderRadius: '10px', display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                                    {event.address}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', paddingTop: '24px', borderTop: '1px solid #262c3a', marginTop: '32px' }}>
                        <span style={{ color: 'rgba(255, 255, 255, 0.3)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            Secretaria da Saúde de Marília — Uso restrito a funcionários autorizados
                        </span>
                    </div>
                </div>
            </div>

            {/* Rodapé com botões de Ação */}
            <DialogFooter className="flex w-full h-fit">
                <div className="flex w-full h-fit items-center justify-between pt-4 border-t border-[#262c3a]">
                    <DialogClose>
                        <Button type="button" variant="secondary" className="bg-[#262c3a] hover:bg-[#323a4d] text-white rounded-xl">
                            Cancelar
                        </Button>
                    </DialogClose>

                    <Button
                        type="button"
                        onClick={handleExportPDF}
                        disabled={isExporting}
                        className="bg-[#ce3434] hover:bg-[#b02828] text-white gap-2 rounded-xl"
                    >
                        <MdDownload className="h-4 w-4" />
                        {isExporting ? 'A gerar PDF...' : 'Extrair Arquivo e Sair'}
                    </Button>
                </div>
            </DialogFooter>
        </DialogContent>
    );
};

export default ClientEventDialog;