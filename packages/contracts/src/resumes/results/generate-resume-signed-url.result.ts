import type { ServiceResult } from '../../common/results'
import type { GenerateResumeSignedUrlErrorCode } from '../errors'

export type GenerateResumeSignedUrlResult = ServiceResult<
  {
    fileId: string
    uploadUrl: string
    expiresIn: number
    method: 'PUT'
    headers: {
      'Content-Type': string
    }
  },
  GenerateResumeSignedUrlErrorCode
>
