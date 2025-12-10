import type { ServiceResponse } from '../../common/responses'
import type { AuthenticateSessionErrorCode } from '../errors'

export type AuthenticateUserResponse = ServiceResponse<
  {
    accessToken: string
    refreshToken: string
  },
  AuthenticateSessionErrorCode
>
