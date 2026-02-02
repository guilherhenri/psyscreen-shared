# PsyScreen Shared

> Shared packages and configurations for the PsyScreen ecosystem
> Stack: pnpm | Turbo | TypeScript | Changesets

## Quick Reference

### Essential Commands

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Development mode
pnpm dev

# Type checking
pnpm check-types

# Linting
pnpm lint

# Release
pnpm release
```

### Monorepo Structure

```
psyscreen/shared/
├── packages/
│   ├── config/          # Shared ESLint, Prettier, TypeScript configs
│   └── contracts/       # DTOs, entities, shared types
├── turbo.json           # Build orchestration
└── pnpm-workspace.yaml # Workspace configuration
```

## What This Project Does

Provides shared configurations, type definitions, and utilities for the PsyScreen ecosystem. This monorepo ensures consistency across all PsyScreen packages and applications.

## Why It's Built This Way

**Architecture**: Monorepo with shared packages (Turbo + pnpm workspaces)

**Key Decisions**:

- **pnpm workspaces** → Why: Efficient dependency management and shared packages
- **Turbo for builds** → Why: Fast incremental builds and task orchestration
- **Separate config package** → Why: Consistent linting/formatting across all packages
- **TypeScript contracts** → Why: Type safety and API contracts between services

## How to Work With It

### Common Workflows

**Adding New Package**:

1. Create directory in `packages/`
2. Add `package.json` with workspace:* dependencies
3. Update `pnpm-workspace.yaml` if needed
4. Run: `pnpm install`

**Updating Shared Config**:

1. Modify files in `packages/config/`
2. Run: `pnpm build` to propagate changes
3. Test with: `pnpm lint` in consuming packages

**Adding New DTO/Contract**:

1. Add to appropriate `packages/contracts/src/` directory
2. Export from `packages/contracts/src/index.ts`
3. Run: `pnpm build` to generate types
4. Update version if breaking changes

### Critical Patterns

**Workspace Dependencies**:

```json
// package.json in workspace packages
{
  "dependencies": {
    "@psyscreen/config": "workspace:*",
    "@psyscreen/contracts": "workspace:*"
  }
}
```

**Turbo Task Pipeline**:

```json
// turbo.json
{
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    }
  }
}
```

## What Claude Gets Wrong

❌ **NEVER**: Use `npm install` - always `pnpm install`
✅ **ALWAYS**: Use workspace dependencies with `workspace:*`

❌ **NEVER**: Import from relative paths across packages
✅ **ALWAYS**: Use package imports: `import { UserDTO } from '@psyscreen/contracts'`

❌ **NEVER**: Forget to run `pnpm build` after contract changes
✅ **ALWAYS**: Build contracts before consuming in other packages

❌ **NEVER**: Use absolute imports to node_modules
✅ **ALWAYS**: Trust TypeScript path resolution and workspace deps

## Package-Specific Guidelines

### packages/config
- **Purpose**: Shared ESLint, Prettier, TypeScript configurations
- **Usage**: Import configs in consuming packages
- **Patterns**: Extends base configs, overrides for specific needs

### packages/contracts  
- **Purpose**: DTOs, commands, results, shared types
- **Usage**: Import types for API contracts
- **Patterns**: NestJS-style validation, class-transformer decorators

## Development Workflow

**Local Development**:

```bash
# Install all dependencies
pnpm install

# Build all packages in dependency order
pnpm build

# Watch mode for development
pnpm dev

# Type check all packages
pnpm check-types

# Lint all packages
pnpm lint
```

**Release Process**:

```bash
# Add changeset for version bump
pnpm changeset

# Version packages based on changesets
pnpm version-packages

# Build and publish
pnpm release
```

## Architecture Decisions

**Monorepo Benefits**:
- Single dependency management
- Atomic commits across packages
- Shared tooling and configurations
- Easier refactoring and updates

**Turbo Integration**:
- Incremental builds based on file changes
- Task dependency management
- Caching for faster builds
- Parallel execution when possible

**Workspace Dependencies**:
- Use `workspace:*` for internal dependencies
- Automatic version resolution
- No need for manual version bumping
- Consistent dependency versions across packages
