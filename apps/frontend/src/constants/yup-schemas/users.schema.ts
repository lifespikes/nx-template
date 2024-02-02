import Yup from '@spikey/frontend/constants/yup-schemas/yup'
import { emailSchema } from '@spikey/frontend/constants/yup-schemas/common.schema'

export const checkCredentialsSchema = Yup.object({}).shape({
  email: emailSchema,
  password: Yup.string().required('La contraseña es requerida'),
})
