"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LiaHospitalAltSolid } from "react-icons/lia";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/toast";
import { useAuth } from "@/app/features/auth/api/AuthContext";
import { BASE_USERS } from "@/lib/MockData";
import { BaseUser } from "@/app/features/auth/types/User";
import { getDrivers, loginAttendant, loginDriver } from "@/app/features/auth/api/authApi";
import LoadingPage from "@/components/LoadingPage";
import { Ambulance, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { LoginAttendantRequest, LoginDriverRequest } from "@/app/features/auth/requests/UsersRequests";
import { LoginDriverResponse } from "@/app/features/auth/responses/UserResponses";
import { getCurrentPosition } from "@/app/features/client/api/NominatimAPI";
import { Spinner } from "@/components/ui/spinner";

interface FormState {
  email: string;
  senha: string;
}

export default function LoginPage() {
  const router = useRouter();

  const { login } = useAuth();

  // usuários mockados

  const [form, setForm] = useState<FormState>({
    email: "",
    senha: ""
  });

  const [userType, setUserType] = useState<"DRIVER" | "ATTENDANT">("ATTENDANT");
  const [isLoadingPos, setIsLoadingPos] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  function setField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro(null);

    console.warn(userType);

    try {

      if (userType === "ATTENDANT") {
        // Alocando para o state User

        const attendantLoginBody: LoginAttendantRequest = {
          email: form.email,
          password: form.senha
        }

        setIsLoadingPos(true);

        const user: any = await loginAttendant(attendantLoginBody);
        const baseUser: BaseUser = {
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
          phone: user.phone,
          role: user.role,
          status: user.status,
          createdAt: user.createdAt
        }
        login(baseUser);
        router.push("/admin");
        return;

      } else if (userType === "DRIVER") {
        setIsLoadingPos(true);
        const userPos: any = await getCurrentPosition()
        if (userPos !== null) {
          console.warn(userPos)
          const driverLoginBody: LoginDriverRequest = {
            email: form.email,
            password: form.senha,
            latitude: userPos.lat,
            longitude: userPos.lng
          }
          const user: any = await loginDriver(driverLoginBody)
          const baseUser: BaseUser = {
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            phone: user.phone,
            role: user.role,
            status: user.status,
            createdAt: user.createdAt
          }
          login(baseUser);
          router.push("/client");
          return;
        } else {
          Error("Posição não encontrada!");
        }
      } else {
        toast.add({
          type: "error",
          description: ("Usuário não encontrado!"),
          priority: "high",
        })
      }
    } catch (error) {
      console.warn(String(error))
      toast.add({
        type: "error",
        description: String(error),
        priority: "high",
      })
    } finally {
      setIsLoadingPos(false);
      console.log("Login:", form);
    }
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
        <div className="w-full max-w[500px] rounded-[30px] border border-white/20 bg-[#1c2330] p-[30px] flex flex-col gap-[15px]">
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

            <div className="flex flex-col gap-2">
              <Label className="text-base font-normal text-white/50">
                Entrar como
              </Label>
              <div className="flex h-12 gap-2">
                <PerfilOption
                  icon={Phone}
                  label="Telefonista"
                  selected={userType === "ATTENDANT"}
                  onClick={() => setUserType("ATTENDANT")}
                />
                <PerfilOption
                  icon={Ambulance}
                  label="Ambulância"
                  selected={userType === "DRIVER"}
                  onClick={() => setUserType("DRIVER")}
                />
              </div>
            </div>

            {isLoadingPos ? (
              <div className="flex mt-2.5 h-[42px] w-full items-center justify-center rounded-[10px] bg-[#f93a3a] text-lg font-semibold text-white hover:bg-[#e13333]">
                <Spinner className="size-6" />
              </div>
            ) : (
              <Button
                type="submit"
                className="mt-2.5 h-[42px] w-full rounded-[10px] bg-[#f93a3a] text-lg font-semibold text-white hover:bg-[#e13333]"
              >
                Entrar no Sistema
              </Button>
            )}


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
        "flex flex-1 items-center justify-center gap-[15px] rounded-xl border border-[#30363d] px-5 py-[5px] transition-colors",
        selected ? "bg-white text-black" : "bg-[#1c2330] text-white/50",
      )}
    >
      <Icon className="h-[17px] w-[17px]" />
      <span className="text-base">{label}</span>
    </button>
  );
}
