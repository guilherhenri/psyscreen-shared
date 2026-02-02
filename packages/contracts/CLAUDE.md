# PsyScreen Contracts Package

> DTOs, commands, results, and shared types for PsyScreen
> Herda de: [Root CLAUDE.md](../../../CLAUDE.md)

## Quick Reference

### Package Structure

```
packages/contracts/src/
├── auth/
│   ├── commands/         # Command DTOs (login, register, refresh)
│   ├── results/          # Result DTOs (authentication, registration)
│   ├── errors.ts         # Auth-specific error types
│   └── topics.ts         # Event topics for messaging
├── common/
│   ├── errors.ts         # Base error classes
│   └── results.ts        # Base result patterns
└── gateway/
    ├── dtos/             # Gateway DTOs (login, register)
    └── responses/        # HTTP response DTOs
```

### Import Patterns

```typescript
// Auth contracts
import { LoginUserCommand } from '@psyscreen/contracts/auth';
import { AuthenticateUserResult } from '@psyscreen/contracts/auth/results';

// Common patterns
import { BaseError } from '@psyscreen/contracts/common';
import { Result } from '@psyscreen/contracts/common/results';

// Gateway contracts
import { LoginUserDTO } from '@psyscreen/contracts/gateway';
import { RegisterUserResponseDTO } from '@psyscreen/contracts/gateway/responses';
```

## What This Package Does

Defines the API contracts and data transfer objects that enable type-safe communication between PsyScreen services. Provides validation, serialization, and documentation for all external interfaces.

## Why It's Built This Way

**NestJS Ecosystem**:
- Uses class-validator and class-transformer decorators
- Automatic validation and transformation
- Swagger/OpenAPI documentation generation
- Consistent patterns across all DTOs

**Domain-Driven Design**:
- Separate modules for different domains (auth, gateway, common)
- Clear separation between commands, results, and errors
- Event-driven architecture with typed topics

**Type Safety**:
- Compile-time type checking across service boundaries
- Runtime validation with decorators
- Consistent error handling patterns

## How to Work With It

### Creating New DTOs

**Command DTO Pattern**:

```typescript
// src/auth/commands/new-feature.command.ts
import { IsString, IsEmail } from 'class-validator';

export class NewFeatureCommand {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;
}
```

**Result DTO Pattern**:

```typescript
// src/auth/results/new-feature.result.ts
import { IsString, IsBoolean } from 'class-validator';

export class NewFeatureResult {
  @IsString()
  userId: string;

  @IsBoolean()
  success: boolean;

  @IsString()
  @IsOptional()
  message?: string;
}
```

### Validation and Transformation

**Automatic Validation**:

```typescript
import { Validate } from 'class-validator';

const command = new LoginUserCommand();
command.email = 'invalid-email';

const errors = await validate(command);
// Returns validation errors array
```

**Transformation**:

```typescript
import { plainToInstance } from 'class-transformer';

const userData = { email: 'user@example.com', password: 'secret' };
const command = plainToInstance(LoginUserCommand, userData);
// Transforms and validates the data
```

### Error Handling

**Custom Errors**:

```typescript
// src/auth/errors.ts
export class InvalidCredentialsError extends BaseError {
  constructor(message = 'Invalid credentials') {
    super(message, 'INVALID_CREDENTIALS');
  }
}
```

**Result Pattern**:

```typescript
// src/common/results.ts
export class Result<T> {
  constructor(
    public success: boolean,
    public data?: T,
    public error?: BaseError
  ) {}

  static success<T>(data: T): Result<T> {
    return new Result(true, data);
  }

  static failure<T>(error: BaseError): Result<T> {
    return new Result(false, undefined, error);
  }
}
```

## What Claude Gets Wrong

❌ **NEVER**: Use interfaces instead of classes for DTOs
✅ **ALWAYS**: Use classes with decorators for validation

❌ **NEVER**: Forget to export new DTOs from index files
✅ **ALWAYS**: Update module index.ts when adding new contracts

❌ **NEVER**: Use optional properties without @IsOptional() decorator
✅ **ALWAYS**: Add appropriate validation decorators for all properties

❌ **NEVER**: Mix validation logic with business logic
✅ **ALWAYS**: Keep DTOs focused on data validation and transformation

## Common Patterns

### Authentication Flow

```typescript
// Command
const loginCommand = new LoginUserCommand();
loginCommand.email = 'user@example.com';
loginCommand.password = 'password';

// Result
const authResult = await authService.login(loginCommand);
if (authResult.success) {
  // Handle successful authentication
}
```

### Error Handling

```typescript
try {
  const result = await someService.execute(command);
  if (!result.success) {
    throw result.error;
  }
  return result.data;
} catch (error) {
  if (error instanceof BaseError) {
    // Handle known error
  }
  throw error;
}
```

### Event Topics

```typescript
// src/auth/topics.ts
export const AUTH_EVENTS = {
  USER_REGISTERED: 'auth.user.registered',
  USER_LOGGED_IN: 'auth.user.login',
  TOKEN_REFRESHED: 'auth.token.refreshed',
} as const;
```

## Development Workflow

**Adding New Contracts**:

1. Create DTO class in appropriate module directory
2. Add validation decorators
3. Export from module index.ts
4. Export from root src/index.ts
5. Run: `pnpm build` to generate types
6. Update version if breaking changes

**Testing Contracts**:

```typescript
import { validate } from 'class-validator';
import { LoginUserCommand } from '../src/auth/commands';

describe('LoginUserCommand', () => {
  it('should validate valid input', async () => {
    const command = new LoginUserCommand();
    command.email = 'test@example.com';
    command.password = 'password123';
    
    const errors = await validate(command);
    expect(errors).toHaveLength(0);
  });
});
```

## Build and Release

**Build Process**:

```bash
# Build contracts package
cd packages/contracts
pnpm build

# Generates dist/ with compiled types
# Creates index.d.ts for TypeScript consumers
```

**Version Management**:

```bash
# Patch version for non-breaking changes
pnpm version patch

# Minor version for new features
pnpm version minor

# Major version for breaking changes
pnpm version major
```

## Best Practices

**DTO Design**:
- Use descriptive property names
- Add appropriate validation rules
- Keep DTOs focused and single-purpose
- Document complex validation rules

**Error Handling**:
- Extend BaseError for custom errors
- Use error codes for programmatic handling
- Provide meaningful error messages
- Log errors with context

**Module Organization**:
- Group related DTOs in modules
- Keep modules focused on domains
- Use consistent naming conventions
- Maintain clear module boundaries
