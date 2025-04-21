/**
 * Page d'inscription
 */
import RegisterForm from "@/components/auth/register-form"
import AuthLayout from "@/components/auth/auth-layout"

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Créer un compte"
      subtitle="Rejoignez la communauté NitroFx"
      backgroundImage="/register-background.jpg"
    >
      <RegisterForm />
    </AuthLayout>
  )
}
