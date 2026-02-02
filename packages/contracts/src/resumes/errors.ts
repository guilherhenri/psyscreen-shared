import type { GlobalErrorCodes } from '../common/errors'

export enum GenerateResumeSignedUrlCodes {
  INVALID_RESUME_TYPE = 'INVALID_RESUME_TYPE',
}

export type GenerateResumeSignedUrlErrorCode =
  | GenerateResumeSignedUrlCodes
  | GlobalErrorCodes.UNEXPECTED_ERROR

export enum ConfirmResumeUploadCodes {
  UPLOAD_NOT_FOUND = 'UPLOAD_NOT_FOUND',
}

export type ConfirmResumeUploadErrorCode =
  | ConfirmResumeUploadCodes
  | GlobalErrorCodes.UNEXPECTED_ERROR
