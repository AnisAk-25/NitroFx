/**
 * Page de connexion
 */
import LoginForm from "@/components/auth/login-form"
import AuthLayout from "@/components/auth/auth-layout"

export default function LoginPage() {
  return (
    <AuthLayout title="Connexion" subtitle="Accédez à votre compte NitroFx" backgroundImage="/login-background.jpg">
      <LoginForm />
    </AuthLayout>
  )
}
