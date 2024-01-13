'use client'
import {
  Button,
  Card,
  CardContent,
  Form,
  Heading,
  InputField,
  InputGroup,
  useToast,
} from '@lifespikes/ui'
import React, { FC } from 'react'
import { SubmitHandler } from 'react-hook-form'
import BasicInformationForm from './basic-information-form'

import { useTypeSafeMutation } from '@/hooks/use-type-safe-mutation'
import { useForm } from '@/hooks/use-form'
import {
  userFormSchema,
  UserFormSchemaType,
  userFormsSchemaCreate,
} from '@/constants/yup-schemas/prisma.schema'
import { useNavigation } from '@/hooks/use-navigation'

export interface UsersFormProps {
  isCreateForm?: boolean
  initialData?: Record<any, any>
}

const UsersForm: FC<UsersFormProps> = ({
  isCreateForm = true,
  initialData,
}) => {
  const form = useForm<UserFormSchemaType>({
    schema: isCreateForm ? userFormsSchemaCreate : userFormSchema,
    defaultValues: {
      name: '',
      address: '',
      birthDate: null,
      password: '',
      confirmPassword: '',
      departmentId: null,
      email: '',
      identification: '',
      image: null,
      municipalityId: null,
      phoneNumber: null,
      ...initialData,
    },
  })

  const toast = useToast()

  const { router } = useNavigation()

  const { isPending, mutateAsync } = useTypeSafeMutation({
    mutationKey: [isCreateForm ? 'createUser' : 'updateUser'],
    invalidatedQueries: ['getUsers'],
    onSuccess() {
      toast.success({
        title: '¡Perfecto!',
        description: isCreateForm
          ? 'Se ha creado el usuario'
          : 'Se ha actualizado el usuario',
      })

      if (isCreateForm) {
        router.replace('/admin/users')
      }
    },
  })

  const onSubmit: SubmitHandler<any> = async (data) => {
    await mutateAsync(data, {
      onError(e) {
        throw e
      },
    })
  }

  return (
    <Card>
      <CardContent className="py-8">
        <Form {...form}>
          <div className="space-y-6">
            <BasicInformationForm isEnabledEmailField={isCreateForm} />

            <div className="space-y-4">
              <Heading>Permisos</Heading>
              <InputGroup className="lg:grid-cols-1"></InputGroup>

              <InputGroup className="lg:grid-cols-1 xl:grid-cols-2">
                <InputField name="password" label="Contraseña" />
                <InputField
                  name="confirmPassword"
                  label="Confirmar contraseña"
                />
              </InputGroup>
            </div>

            <div className="flex w-full justify-end">
              <Button
                isLoading={isPending}
                onClick={form.handleSubmit(onSubmit, console.log)}
              >
                {isCreateForm ? 'Crear' : 'Actualizar'}
              </Button>
            </div>
          </div>
        </Form>
      </CardContent>
    </Card>
  )
}

export default UsersForm
