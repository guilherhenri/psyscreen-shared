import type { ServiceResponse } from '../../common/responses'
import type { EnrollIdentityErrorCode } from '../errors'

export type RegisterUserResponse = ServiceResponse<
  { user: { id: string; name: string; email: string; passwordHash: string } },
  EnrollIdentityErrorCode
>
