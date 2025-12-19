import type { ServiceResult } from '../../common/results'
import type { EnrollIdentityErrorCode } from '../errors'

export type RegisterUserResult = ServiceResult<
  { user: { id: string; name: string; email: string; passwordHash: string } },
  EnrollIdentityErrorCode
>
