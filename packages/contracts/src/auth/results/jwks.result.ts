import type { ServiceResult } from '../../common/results'

export type JwksResult = ServiceResult<{
  keys: Array<{
    kty?: string
    use?: string
    kid?: string
    alg?: string
    n?: string
    e?: string
  }>
}>
