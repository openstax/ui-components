# OpenStax UI Component Library

General UI components for OpenStax projects.

## Installation
Add to your project using GitHub tags:

```json
"dependencies": {
  "@openstax/ui-components": "https://github.com/openstax/ui-components#1.15.0"
}
```
Use a version that matches your project's requirements.

## Versioning & Release Process

### Git Tags
We use Git tags instead of npm publishing:
- Standard: `1.15.0`, `1.15.1`
- Pre-release: `1.15.3-pre1`
- Feature-specific: `sentry-logger-03212025`

### Creating a Release
1. Update the version in `package.json`
1. Run `./scripts/publish.bash`

## CI/CD Workflows

### Checks Workflow
Runs on PRs and main branch, handling:
- Jira ticket verification
- Linting and tests

## Usage in Projects

```typescript
// Import all components
import * as UI from '@openstax/ui-components';

// Or just what you need
import { Button, Modal } from '@openstax/ui-components';
```

## Development

```bash
yarn dev         # Watch mode
yarn ladle serve # Component demos at localhost:61000
yarn test        # Run tests
yarn lint        # Check code rules
yarn dist        # Build distribution files
```

## Testing Across Projects

To test changes before tagging:

1. Push your branch
2. Update the consuming project temporarily:
   ```json
   "@openstax/ui-components": "https://github.com/openstax/ui-components#your-branch"
   ```
3. After testing, create and push a proper version tag

## Best Practices

- Update `CHANGELOG.md` with significant changes
- Coordinate breaking changes with dependent projects
- Include tests and Ladle stories for new components
- Export all components from `src/index.ts`
