export type DomainError<L> = {
  code: L
  message: string
  details?: Record<string, unknown>
}

export type SuccessResult<R> = {
  success: true
  data: R
}

export type ErrorResult<L> = {
  success: false
  error: DomainError<L>
}

export type ServiceResult<R, L = null> = SuccessResult<R> | ErrorResult<L>
