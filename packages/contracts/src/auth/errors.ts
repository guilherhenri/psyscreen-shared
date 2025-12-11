import type { GlobalErrorCodes } from '../common/errors'

export enum EnrollIdentityCodes {
  EMAIL_ALREADY_IN_USE = 'EMAIL_ALREADY_IN_USE',
}

export type EnrollIdentityErrorCode =
  | EnrollIdentityCodes
  | GlobalErrorCodes.UNEXPECTED_ERROR

export enum AuthenticateSessionCodes {
  INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
}

export type AuthenticateSessionErrorCode =
  | AuthenticateSessionCodes
  | GlobalErrorCodes.UNEXPECTED_ERROR

enum RenewTokenCodes {
  INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
}

export type RenewTokenErrorCode =
  | RenewTokenCodes
  | GlobalErrorCodes.RESOURCE_NOT_FOUND
  | GlobalErrorCodes.UNEXPECTED_ERROR
