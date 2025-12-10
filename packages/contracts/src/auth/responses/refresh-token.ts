import type { DomainError, ServiceResponse } from '../../common/responses'
import type { RenewTokenErrorCode } from '../errors'

export type RefreshTokenResponse = ServiceResponse<
  {
    accessToken: string
    refreshToken: string
  },
  DomainError<RenewTokenErrorCode>
>
