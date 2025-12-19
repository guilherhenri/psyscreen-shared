import type { ServiceResult } from '../../common/results'
import type { AuthenticateSessionErrorCode } from '../errors'

export type AuthenticateUserResult = ServiceResult<
  {
    accessToken: string
    refreshToken: string
  },
  AuthenticateSessionErrorCode
>
