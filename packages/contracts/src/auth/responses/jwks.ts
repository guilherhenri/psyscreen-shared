import type { ServiceResponse } from '../../common/responses'

export type JwksResponse = ServiceResponse<{
  keys: Array<{
    kty?: string
    use?: string
    kid?: string
    alg?: string
    n?: string
    e?: string
  }>
}>
