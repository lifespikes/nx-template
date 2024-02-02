import { API_URL } from '@spikey/frontend/api/lib/fetcher'
import { UserType } from '@spikey/frontend/types/models'
import { CheckCredentialsSchemaType } from '@spikey/frontend/types/schemas'
import { CommonResponse } from '@spikey/frontend/types/api'
import axios from 'axios'

export const checkCredentials = async (
  data: CheckCredentialsSchemaType,
): Promise<CommonResponse<UserType | null>> => {
  return (
    (await axios.create({ baseURL: API_URL }).post('/api/auth/login', data))
      .data ?? null
  )
}
