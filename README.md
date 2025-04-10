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
You'll need to include the built `dist` directory in your tag:


```bash
# one-liner grab-and-go
# 1. Create a temporary branch and build distribution files
# This removes any existing 'dist' branch, creates a new one, builds the files,
# then force-adds them to git (since dist/ is gitignored)
# The `dist` directory is normally gitignored but must be included in release tags.
# This is why the release process uses a temporary branch with force-adding the built files.
(git branch -D dist || true) && git checkout -b dist && yarn dist && git add -f dist && git commit -m 'dist'

# 2. Tag the commit with your version
# Replace [version] with your actual version number (e.g., 1.15.0, 2.0.0-beta1, 20250410-component-for-x)
git tag [version]

# 3. Push the tag to GitHub
# You can push all tags with `git push --tags`
# **OR** push a specific tag with:
git push origin [version]
```

This temporary branch is just for tagging — no need to merge it. After pushing the tag, you can return to your original branch.

## Build Output

The `dist` directory (included only in tags) contains:
- CommonJS: `index.js`
- ES Modules: `index.module.js`
- Modern ESM: `index.modern.mjs` 
- UMD: `index.umd.js`
- TypeScript types: `index.d.ts`

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
