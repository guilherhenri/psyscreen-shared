# @psyscreen/contracts

## 1.0.0

### Major Changes

- Restructure contract types to separate gateway and microservice boundaries

  BREAKING CHANGE: Contract types have been reorganized to provide clear separation between gateway (HTTP) layer and microservice layer contracts. All existing imports will need to be updated.

  **Migration Guide:**
  - `RegisterUserCommand` (when used as HTTP body) → `RegisterUserDto`
  - Microservice responses remain as `*Result` types
  - New `*ResponseDto` types introduced for gateway HTTP responses
  - Path parameters now use `*ParamsDto` naming
  - Query parameters now use `*QueryDto` naming

  **New Structure:**
  - DTOs: Gateway request/response contracts (HTTP layer)
  - Commands: Microservice command payloads (message broker/RPC)
  - Results: Microservice response types
  - Events: Event payloads (event-driven communication)

## 0.3.3

### Patch Changes

- fix jwks reponse keys type

## 0.3.2

### Patch Changes

- fix jwks topic name

## 0.3.1

### Patch Changes

- remove RenewTokenCodes

## 0.3.0

### Minor Changes

- add auth topics

## 0.2.5

### Patch Changes

- fix global error codes var name

## 0.2.4

### Patch Changes

- export global errors code

## 0.2.3

### Patch Changes

- add global errors code

## 0.2.2

### Patch Changes

- fix double DomainError type

## 0.2.1

### Patch Changes

- export errors code

## 0.2.0

### Minor Changes

- change response to functional pattern

## 0.1.1

### Patch Changes

- fix register user response

## 0.1.0

### Minor Changes

- shared contracts and types
