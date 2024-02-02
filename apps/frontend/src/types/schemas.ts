import yup from 'yup'
import { checkCredentialsSchema } from '@spikey/frontend/constants/yup-schemas/users.schema'

export type CheckCredentialsSchemaType = yup.InferType<
  typeof checkCredentialsSchema
>
