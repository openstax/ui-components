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

#### Before Starting
1. Fetch the latest tags and check current versions:
   ```bash
   git fetch --all --tags
   # Show last 10 version tags (including pre-releases)
   git tag -l | grep '^[0-9]' | sort -V | tail -n 10
   ```
2. Ensure package.json version matches the next version you plan to release

#### Using the Publish Script (Recommended)
The simplest way to create a release:

1. Update the version in `package.json` to match the next version number
2. Ensure your working directory is clean (commit or stash any changes)
3. Run `./scripts/publish.bash`

This script automates the release process, handling the build and tag creation steps for you.

#### Manual Release Process
Alternatively, you can create a release manually following these steps:

1. Update the version in `package.json` to match the next version number
2. Ensure your working directory is clean (commit or stash any changes)
3. Run `yarn --check-files` to verify dependencies
4. Create a release branch:
   ```bash
   release_branch="release-$(date +%Y-%m-%d_%H-%M-%S)"
   git checkout -b "$release_branch"
   ```
5. Build the distribution files:
   ```bash
   yarn build:clean
   git add -f dist/
   git commit -m "adding dist files"
   ```
6. Create and push the tag:
   ```bash
   version=$(node -e "process.stdout.write(JSON.parse(require('package.json').toString()).version)")
   git tag "$version"
   git push origin tag "$version"
   ```
7. Return to your original branch:
   ```bash
   git checkout -
   ```

#### Creating Experimental/Pre-release Tags
For testing experimental features or creating pre-release versions, you can use this simplified process:

```bash
# one-liner grab-and-go
# 1. Create a temporary branch and build distribution files
# This removes any existing 'dist' branch, creates a new one, builds the files,
# then force-adds them to git (since dist/ is gitignored)
(git branch -D dist || true) && git checkout -b dist && yarn dist && git add -f dist && git commit -m 'dist'

# 2. Tag the commit with your version
# Use appropriate version format for experimental/pre-release tags
# Examples: 2.0.0-beta1, 2.0.0-alpha.3, feature-test-20240415
git tag [version]

# 3. Push the tag to GitHub
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
