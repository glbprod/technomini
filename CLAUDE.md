# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development

- `npm run dev` - Start Vite dev server
- `npm run build` - Type check and build for production
- `npm run preview` - Preview production build locally

### Testing

- `npm run test` - Run tests in watch mode
- `npm run test:run` - Run tests once
- Test files: `*.test.tsx` in `src/`
- Uses Vitest with @testing-library/react and jsdom environment

### Code Quality

- `npm run lint` - Run ESLint
- `npm run lint:fix` - Auto-fix ESLint issues
- `npm run prepush:local` - Run all pre-push checks (format, lint, typecheck, test, build)
  - Use `--fast` flag to skip build
  - Use `--fix` flag to auto-fix formatting issues
  - Use `--staged` flag to check only staged files

### Utilities

- `npm run update-deps` - Check and update dependencies
- `npm run backup` - Backup repository
- `npm run changelog` - Generate changelog using conventional commits

## Project Architecture

### Tech Stack

- **React 19** with TypeScript (strict mode enabled)
- **Vite 7** for build tooling
- **Tailwind CSS 3** for styling
- **Vitest** for testing
- **ESLint** (flat config) with TypeScript support
- **Husky** for Git hooks

### TypeScript Configuration

- Uses project references: `tsconfig.app.json` for app code, `tsconfig.node.json` for build tooling
- Strict mode enabled with additional linting rules (`noUnusedLocals`, `noUnusedParameters`)
- Target: ES2022
- Module resolution: bundler mode

### ESLint Configuration

- Uses flat config format
- TypeScript type-checked rules scoped to `.ts` and `.tsx` files only
- Includes React Hooks and React Refresh plugins
- Parser options reference both tsconfig files

### Code Style Principles (from .github/instructions/system.instructions.md)

- **Simplicity**: Favor native solutions and readable code before third-party libraries
- **TypeScript**: Use strict typing, avoid `any`
- **Components**: Create small, reusable functional components, use composition
- **Performance**: Optimize renders (React.memo, useMemo) only when necessary
- **Responses**: Be concise, provide complete code or clear excerpts

### Recommended Libraries (from .github/prompts/stack.prompt.md)

When adding new features, consider these preferred libraries:

- **Routing**: React Router or Wouter
- **State Management**: Zustand (preferred over Redux)
- **Data Fetching**: TanStack Query (React Query)
- **UI Components**: Shadcn/UI (based on Radix UI + Tailwind)

### Current Project Structure

- Single-page application with basic landing page in `src/App.tsx`
- Uses lucide-react for icons
- Tailwind utility classes for styling
- Mobile-responsive navigation

## Development Workflow

### Planning Phase

Before coding new features, create an architecture plan. This helps avoid refactoring issues later.

### Commit Strategy

Make preventive commits after each working step. Avoid large refactoring commits that can introduce errors.

### Pre-Push Checks

The `scripts/prepush.sh` script runs:

1. Format check (Prettier)
2. Lint (ESLint)
3. Type check (TypeScript)
4. Tests (Vitest)
5. Build (unless `--fast` is used)

### Deployment

Project is designed for Vercel deployment with automatic CI/CD on push to GitHub.
