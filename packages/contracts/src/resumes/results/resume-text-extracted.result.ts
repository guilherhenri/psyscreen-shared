import type { GlobalErrorCodes } from '../../common/errors'
import type { ServiceResult } from '../../common/results'

export type ResumeTextExtractedResult = ServiceResult<
  null,
  GlobalErrorCodes.UNEXPECTED_ERROR
>
