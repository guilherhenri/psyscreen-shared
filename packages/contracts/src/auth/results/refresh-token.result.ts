import type { ServiceResult } from '../../common/results'
import type { RenewTokenErrorCode } from '../errors'

export type RefreshTokenResult = ServiceResult<
  {
    accessToken: string
    refreshToken: string
  },
  RenewTokenErrorCode
>
