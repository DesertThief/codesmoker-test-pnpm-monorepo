# CodeSmoker Test: pnpm Monorepo (#13)

A test repository for the CodeSmoker test suite demonstrating a pnpm workspace monorepo structure.

## Project Structure

```
├── apps/
│   └── web/              # Web application
├── packages/
│   ├── core/             # Core shared library
│   └── utils/            # Utility functions
├── package.json          # Root package.json
├── pnpm-workspace.yaml   # Workspace configuration
└── .npmrc                # pnpm configuration
```

## Features

- **pnpm Workspaces**: Efficient dependency management with workspace protocol
- **TypeScript**: Full TypeScript support across all packages
- **Monorepo Structure**: Apps and packages organized in separate directories
- **Workspace Dependencies**: Using `workspace:*` protocol for local packages

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Installation

```bash
pnpm install
```

### Build

```bash
pnpm build
```

### Development

```bash
pnpm dev
```

## Workspace Protocol

Dependencies between packages use the `workspace:` protocol:

```json
{
  "dependencies": {
    "@myapp/core": "workspace:*",
    "@myapp/utils": "workspace:*"
  }
}
```

## Documentation

Built using latest documentation from:
- [pnpm.io](https://pnpm.io) - pnpm package manager documentation

---

*This is a CodeSmoker test repository*
