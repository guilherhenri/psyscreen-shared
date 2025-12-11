import type { GlobalErrorCode } from '../common/errors'

export enum EnrollIdentityCodes {
  EMAIL_ALREADY_IN_USE = 'EMAIL_ALREADY_IN_USE',
}

export type EnrollIdentityErrorCode =
  | EnrollIdentityCodes
  | GlobalErrorCode.UNEXPECTED_ERROR

export enum AuthenticateSessionCodes {
  INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
}

export type AuthenticateSessionErrorCode =
  | AuthenticateSessionCodes
  | GlobalErrorCode.UNEXPECTED_ERROR

enum RenewTokenCodes {
  INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
}

export type RenewTokenErrorCode =
  | RenewTokenCodes
  | GlobalErrorCode.RESOURCE_NOT_FOUND
  | GlobalErrorCode.UNEXPECTED_ERROR
