import yup from '@/constants/yup-schemas/yup'

import { InferType } from 'yup'

export const userSchema = yup.object().shape({
  name: yup.string().nullable(),
  email: yup.string().email().nullable(),
  password: yup.string().nullable(),
  profileid: yup.number().required(),
})

export const passwordSchema = yup.object().shape({
  password: yup.string(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'La contraseña debe coincidir'),
})

export const passwordSchemaRequired = yup.object().shape({
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'La contraseña debe coincidir')
    .required(),
})

export const profileSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  image: yup.string().url().nullable(),
  phoneNumber: yup.string().nullable(),
  identification: yup.string().nullable(),
  address: yup.string().nullable(),
  birthDate: yup.date().nullable(),
  //municipalityId: yup.number().nullable(),
  professionId: yup.number().nullable(),
})

export const patientSchema = yup.object().shape({
  profileid: yup.number().required(),
})

export const medicalHistorySchema = yup.object().shape({
  patientId: yup.number().required(),
  numAfiliation: yup.string().nullable(),
})

export const appointmentSchema = yup.object().shape({
  reason: yup.string().required(),
  observations: yup.string().required(),
  forecast: yup.string().required(),
  others: yup.string().default(''),
  lastDateOfVisit: yup.date().default(() => new Date()),
  dentistId: yup.number().required(),
  medicalHistoryId: yup.number().required(),
})

export const assessmentTestSchema = yup.object().shape({
  name: yup.string().required(),
  oralHygiene: yup.number().required(),
  useOfdentalFloss: yup.number().required(),
  useOfToothBrush: yup.number().required(),
  useOfMouthWash: yup.number().required(),
  appointmentId: yup.number().required(),
})

export const departmentSchema = yup.object().shape({
  name: yup.string().required(),
})

export const professionSchema = yup.object().shape({
  name: yup.string().required(),
})

/// forms

const baseUserFormSchema = yup
  .object()
  .shape({
    departmentId: yup.number().nullable(),
    municipalityId: yup
      .number()
      .nullable()
      .when('departmentId', (values, schema, options) => {
        if (values[0] !== null) {
          return schema.required(
            'Campo municipio es requerido cuando el departamento se especifica',
          )
        }
        return schema
      }),
  })
  .concat(profileSchema)
export const userFormSchema = yup
  .object()
  .shape({})
  .concat(baseUserFormSchema)
  .concat(passwordSchema)

export const userFormsSchemaCreate = yup
  .object()
  .shape({})
  .concat(baseUserFormSchema)
  .concat(passwordSchemaRequired)

export type UserFormSchemaType = InferType<typeof userFormSchema>
export type UserFormSchemaCreateType = InferType<typeof userFormsSchemaCreate>
