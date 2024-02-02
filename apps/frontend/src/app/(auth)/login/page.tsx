import Link from 'next/link'

import { Logo } from '@spikey/frontend/components/global/logo'
import { type Metadata } from 'next'
import { AuthLayout } from '@spikey/frontend/components/global/auth-layout'
import LoginForm from '@spikey/frontend/app/(auth)/login/login-form'

export const metadata: Metadata = {
  title: 'Sign In',
}

const Login = () => {
  return (
    <AuthLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo />
        </Link>
      </div>
      <h2 className="mt-20 text-lg font-semibold text-gray-900">
        Inicia sesión en tu cuenta
      </h2>
      <p className="mt-2 text-sm text-gray-700">
        ¿No tienes une cuenta?{' '}
        <Link
          href="/register"
          className="font-medium text-blue-600 hover:underline"
        >
          Registrate
        </Link>{' '}
      </p>
      <LoginForm />
    </AuthLayout>
  )
}

export default Login
