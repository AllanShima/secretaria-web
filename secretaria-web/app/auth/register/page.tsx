"use client";
import { useState } from "react";
import Link  from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, Ambulance } from "lucide-react";
import { cn } from "@/lib/utils";

type Perfil = "telefonista" | "socorrista";

interface FormState {
  email: string;
  senha: string;
  confirmarSenha: string;
  telefone: string;
  perfil: Perfil;
}

export default function SignupPage() {
  const [form, setForm] = useState<FormState>({
    email: "",
    senha: "",
    confirmarSenha: "",
    telefone: "",
    perfil: "telefonista",
  });
  const [erro, setErro] = useState<string | null>(null);

  function setField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro(null);

    if (form.senha !== form.confirmarSenha) {
      setErro("As senhas não coincidem.");
      return;
    }

    console.log("Cadastro:", form);
  }

  return (
    <div className="min-h-screen w-full bg-[#0d1117] flex items-center justify-center p-6">
      <div className="w-full max-w-[500px] rounded-[30px] border border-white/50 bg-[#1c2330] p-[30px] flex flex-col gap-[15px]">
        <div className="flex flex-col gap-2.5">
          <h1 className="text-2xl font-normal text-white">Cadastro</h1>
          <p className="text-sm text-white/60">
            Crie a sua conta para continuar
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-[15px]">
          <Field label="Email">
            <Input
              type="email"
              placeholder="Ex: allanshinhama@gmail.com"
              value={form.email}
              onChange={(e) => setField("email", e.target.value)}
              className={inputClasses}
              required
            />
          </Field>

          <Field label="Senha">
            <Input
              type="password"
              placeholder="Ex: allan123"
              value={form.senha}
              onChange={(e) => setField("senha", e.target.value)}
              className={inputClasses}
              required
            />
          </Field>

          <Field label="Confirme a Senha">
            <Input
              type="password"
              placeholder="Ex: allan123"
              value={form.confirmarSenha}
              onChange={(e) => setField("confirmarSenha", e.target.value)}
              className={inputClasses}
              required
            />
          </Field>

          <Field label="Telefone">
            <Input
              type="tel"
              placeholder="Ex: 14981826224"
              value={form.telefone}
              onChange={(e) => setField("telefone", e.target.value)}
              className={inputClasses}
              required
            />
          </Field>

          <div className="flex flex-col gap-[15px]">
            <Label className="text-base font-normal text-white/50">
              Cadastrar como
            </Label>
            <div className="flex">
              <PerfilOption
                icon={Phone}
                label="Telefonista"
                selected={form.perfil === "telefonista"}
                onClick={() => setField("perfil", "telefonista")}
              />
              <PerfilOption
                icon={Ambulance}
                label="Socorrista"
                selected={form.perfil === "socorrista"}
                onClick={() => setField("perfil", "socorrista")}
              />
            </div>
          </div>

          {erro && <p className="text-sm text-[#f64444]">{erro}</p>}

          <Button
            type="submit"
            className="mt-2.5 h-[42px] w-full rounded-[10px] bg-[#f93a3a] text-lg font-semibold text-white hover:bg-[#e13333]"
          >
            Entrar no Sistema
          </Button>

          <p className="text-center text-[10px] text-white">
            Clique aqui para{" "}
            <Link href="/auth/login" className="text-[#f64444] underline">
              Logar
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

const inputClasses =
  "h-auto rounded-[10px] border border-[#30363d] bg-[#1c2330] px-5 py-[15px] text-base text-white placeholder:text-white/50 focus-visible:ring-1 focus-visible:ring-white/50";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2.5">
      <Label className="text-base font-normal text-white/50">{label}</Label>
      {children}
    </div>
  );
}

function PerfilOption({
  icon: Icon,
  label,
  selected,
  onClick,
}: {
  icon: typeof Phone;
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex flex-1 items-center justify-center gap-[15px] rounded-[10px] border border-[#30363d] px-5 py-[15px] transition-colors",
        selected ? "bg-white text-black" : "bg-[#1c2330] text-white/50",
      )}
    >
      <Icon className="h-[17px] w-[17px]" />
      <span className="text-base">{label}</span>
    </button>
  );
}
