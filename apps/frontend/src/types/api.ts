import HttpStatusCode from '@spikey/frontend/api/lib/http-status-codes';

export type CommonResponse<T = Record<any, any>> = {
  message: string
  data: T
  status: HttpStatusCode
}
