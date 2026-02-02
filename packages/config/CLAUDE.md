# PsyScreen Config Package

> Shared ESLint, Prettier, TypeScript configurations
> Herda de: [Root CLAUDE.md](../../../CLAUDE.md)

## Quick Reference

### Configuration Files

```
packages/config/
├── eslint/
│   └── base.js           # Base ESLint configuration
├── prettier/
│   └── node.json         # Prettier configuration for Node.js
└── tsconfig/
    ├── base.json         # Base TypeScript configuration
    └── nest.json         # NestJS-specific TypeScript config
```

### Usage Patterns

```json
// package.json in consuming packages
{
  "eslintConfig": {
    "extends": ["@psyscreen/config/eslint/base"]
  },
  "prettier": "@psyscreen/config/prettier/node.json",
  "typescript": {
    "extends": "@psyscreen/config/tsconfig/base.json"
  }
}
```

## What This Package Does

Provides standardized development configurations to ensure consistency across all PsyScreen packages. Eliminates configuration drift and enforces coding standards.

## Why It's Built This Way

**Centralized Configuration**:
- Single source of truth for linting/formatting rules
- Consistent TypeScript compilation across packages
- Easy updates propagate to all consuming packages

**Modular Design**:
- Separate configs for different tools (ESLint, Prettier, TypeScript)
- NestJS-specific configurations for backend services
- Base configurations that can be extended

## How to Work With It

### Using Configurations

**ESLint Configuration**:

```javascript
// .eslintrc.js in consuming package
module.exports = {
  extends: ['@psyscreen/config/eslint/base'],
  rules: {
    // Package-specific overrides
  }
};
```

**Prettier Configuration**:

```json
// .prettierrc.json in consuming package
"@psyscreen/config/prettier/node.json"
```

**TypeScript Configuration**:

```json
// tsconfig.json in consuming package
{
  "extends": "@psyscreen/config/tsconfig/base.json",
  "compilerOptions": {
    "outDir": "./dist"
  }
}
```

### Updating Configurations

**Modify Base Config**:

1. Edit configuration files in `packages/config/`
2. Update version in `packages/config/package.json`
3. Run: `pnpm build` to publish changes
4. Update consuming packages to use new version

**Add New Configuration**:

1. Create new config file in appropriate directory
2. Export from package.json if needed
3. Document usage in this CLAUDE.md
4. Update consuming packages

## What Claude Gets Wrong

❌ **NEVER**: Create duplicate ESLint/Prettier configs in consuming packages
✅ **ALWAYS**: Extend from `@psyscreen/config` configurations

❌ **NEVER**: Use different TypeScript compiler options across packages
✅ **ALWAYS**: Extend from base tsconfig and only override necessary options

❌ **NEVER**: Forget to update package version after config changes
✅ **ALWAYS**: Version bump config package when making breaking changes

❌ **NEVER**: Mix local and shared configurations
✅ **ALWAYS**: Use shared configs as base, only add package-specific overrides

## Configuration Details

### ESLint Base Configuration
- JavaScript/ES2022 support
- Node.js environment
- Common error prevention rules
- Import/export validation

### Prettier Node.js Configuration
- 2-space indentation
- Single quotes
- Trailing commas
- Semicolons required

### TypeScript Base Configuration
- Strict mode enabled
- ES2022 target
- CommonJS modules
- Source maps enabled

### TypeScript NestJS Configuration
- Extends base configuration
- Decorator metadata enabled
- Experimental decorators
- Strict property initialization

## Development Workflow

**Local Testing**:

```bash
# Test config changes locally
cd packages/config
pnpm link

# In test package
pnpm link @psyscreen/config
pnpm lint  # Test ESLint config
pnpm check-types  # Test TypeScript config
```

**Release Process**:

```bash
# After making changes
cd packages/config
pnpm version patch  # or minor/major
pnpm publish
```

## Best Practices

**Configuration Inheritance**:
- Always extend from base configurations
- Only override what's necessary for your package
- Document any deviations from standards

**Version Management**:
- Use semantic versioning for config changes
- Breaking changes require major version bump
- Document breaking changes in CHANGELOG

**Consistency**:
- All packages should use the same base configurations
- Avoid package-specific exceptions unless absolutely necessary
- Regular audits to ensure compliance
