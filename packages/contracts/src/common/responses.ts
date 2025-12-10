export type DomainError<L> = {
  code: L
  message: string
  details?: Record<string, unknown>
}

export type SuccessResponse<R> = {
  success: true
  data: R
}

export type ErrorResponse<L> = {
  success: false
  error: DomainError<L>
}

export type ServiceResponse<R, L = null> = SuccessResponse<R> | ErrorResponse<L>
