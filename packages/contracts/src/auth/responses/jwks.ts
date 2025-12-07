export class JwksResponse {
  keys: Array<{
    kty: string
    use: string
    kid: string
    alg: string
    n: string
    e: string
  }>
}
