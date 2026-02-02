import type { ServiceResult } from '../../common/results'
import type { ConfirmResumeUploadErrorCode } from '../errors'

export type ConfirmResumeUploadResult = ServiceResult<
  null,
  ConfirmResumeUploadErrorCode
>
