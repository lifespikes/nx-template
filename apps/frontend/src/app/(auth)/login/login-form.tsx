'use client'

import { SubmitHandler } from 'react-hook-form'
import { CheckCredentialsSchemaType } from '@/types/schemas'
import { useForm } from '@/hooks/use-form'
import { checkCredentialsSchema } from '@/constants/yup-schemas/users.schema'
import { signIn } from 'next-auth/react'
import { ChevronRight } from 'lucide-react'
import { Button, Form, InputField, useToast } from '@lifespikes/ui'

const LoginForm = () => {
  const form = useForm<CheckCredentialsSchemaType>({
    schema: checkCredentialsSchema,
    defaultValues: { password: '', email: '' },
  })

  const {
    formState: { isSubmitting },
  } = form

  const toast = useToast()

  const handleSubmit: SubmitHandler<CheckCredentialsSchemaType> = async (
    data,
  ) => {
    const resp = await signIn('credentials', {
      ...data,
      redirect: false,
    })

    const error = resp?.error as any

    const des = (resp as any)?.description

    const errorFn = () => {
      toast.destructive({
        title: 'No se pudo iniciar sesión',
        description: 'Por favor intente nuevamente',
      })
    }

    if (des) {
      errorFn()
      throw { response: { data: JSON.parse(des) } }
    }

    if (error) {
      return errorFn()
    }

    toast.success({
      title: 'Bienvenido!',
      description: 'Será redireccionado a la página principal',
    })

    setTimeout(() => {
      window.location.replace('/')
    }, 500)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="mt-10 grid grid-cols-1 gap-y-8"
      >
        <InputField
          label="Correo electronico"
          name="email"
          type="password"
          autoComplete="email"
        />
        <InputField
          label="Contraseña"
          name="password"
          type="password"
          autoComplete="current-password"
        />
        <div>
          <Button
            isLoading={isSubmitting}
            className="w-full"
            type="submit"
            rightIcon={<ChevronRight className="h-4 w-4" />}
          >
            Iniciar sesión
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default LoginForm
