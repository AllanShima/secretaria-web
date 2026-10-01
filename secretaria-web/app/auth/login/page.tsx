"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LiaHospitalAltSolid } from "react-icons/lia";
import { useRouter } from "next/navigation";

interface FormState {
  email: string;
  senha: string;
}

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState<FormState>({
    email: "",
    senha: ""
  });
  const [erro, setErro] = useState<string | null>(null);

  function setField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro(null);

    console.log("Login:", form);

    router.push("/admin");
  }

  return (
    <div className="min-h-screen w-full bg-linear-to-b from-[#0d1117] to-[#170d0d] flex flex-col items-center justify-center p-6">
      <div className="flex flex-col items-center gap-5">
    <div className="flex h-[60px] w-[60px] items-center justify-center rounded-[15px] border border-[#76314a] bg-[#332028]">
      <LiaHospitalAltSolid className="h-8 w-8 text-[#ce3434]" />
    </div>
    <div className="flex flex-col items-center gap-2 text-center">
      <h1 className="text-2xl font-semibold text-white">SAMU - Marília</h1>
      <p className="text-[10px] uppercase text-white/50">
        Sistema de Gestão de Alertas de Socorro
      </p>
    </div>
      <div className="w-full max-w[500px] rounded-[30px] border border-white/50 bg-[#1c2330] p-[30px] flex flex-col gap-[15px]">
        <div className="flex flex-col gap-2.5">
          <h1 className="text-2xl font-normal text-white">Login</h1>
          <p className="text-sm text-white/60">
            Faça o login da sua conta pra continuar
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

          <Button
            type="submit"
            className="mt-2.5 h-[42px] w-full rounded-[10px] bg-[#f93a3a] text-lg font-semibold text-white hover:bg-[#e13333]"
          >
            Entrar no Sistema
          </Button>

          <div className="flex w-full justify-end">
            <p className="text-center text-[10px] text-white">
              Clique aqui para{" "}
              <Link href="/auth/register" className="text-[#f64444] underline">
                Cadastrar
              </Link>
            </p>            
          </div>

        </form>
      </div>
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

