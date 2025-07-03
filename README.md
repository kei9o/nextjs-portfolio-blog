# nextjs-portfolio-blog

[My portfolio blog ](https://kei9o.me/) based on [Portfolio Starter Kit](https://vercel.com/templates/next.js/portfolio-starter-kit) ([source](https://github.com/vercel/examples/tree/main/solutions/blog)) by [Vercel](https://vercel.com/home)

## Development

### Running Tests

```bash
# Run all tests
pnpm run test

# Run tests in watch mode
pnpm run test:watch

# Run tests with coverage report
pnpm run test:coverage
```

### Code Quality

```bash
# Check TypeScript types
pnpm run type-check

# Check for linting issues
pnpm run lint

# Auto-fix linting issues
pnpm run lint:fix

# Format code with Prettier
pnpm run format

# Check code formatting
pnpm run format:check
```

## CI/CD & Testing Workflows

### Automated Testing

This project includes automated testing workflows that run on Pull Requests:

- **PR Validation**: Automatically runs on PR creation/updates
  - TypeScript type checking
  - ESLint code quality checks
  - Code formatting validation
  - Unit test execution with coverage reports
  - Results posted as PR comments with detailed validation status

### Workflow Features

- ✅ **Automatic validation** on PR creation and updates
- ✅ **Test coverage reporting** with artifacts
- ✅ **Status updates** posted as PR comments
- ✅ **Code quality checks** (ESLint, Prettier, TypeScript)

### Before Merging

All automated checks must pass before merging PRs. The workflows help ensure:

- Code quality standards are maintained
- All tests pass
- TypeScript compilation succeeds
- Code formatting is consistent
