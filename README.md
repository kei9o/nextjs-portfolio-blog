# nextjs-portfolio-blog

[My portfolio blog ](https://kei9o.me/) based on [Portfolio Starter Kit](https://vercel.com/templates/next.js/portfolio-starter-kit) ([source](https://github.com/vercel/examples/tree/main/solutions/blog)) by [Vercel](https://vercel.com/home)

## Quick Start

```bash
# Clone the repository
git clone https://github.com/kei9o/nextjs-portfolio-blog.git
cd nextjs-portfolio-blog

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

Visit [http://localhost:3002](http://localhost:3002) to see your portfolio blog.

## Prerequisites

- Node.js 18.0 or higher
- pnpm (recommended package manager)
  ```bash
  # Install pnpm if you haven't already
  npm install -g pnpm
  ```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/kei9o/nextjs-portfolio-blog.git
cd nextjs-portfolio-blog
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Set up environment (optional)

The development server runs on port 3002 by default. If you need to change this:

```bash
# Create a .envrc file
echo "export PORT=3002" > .envrc

# Or set the port directly when running
PORT=3000 pnpm run dev
```

### 4. Start the development server

```bash
pnpm run dev
```

Open [http://localhost:3002](http://localhost:3002) in your browser to see the result.

### 5. Build for production

```bash
# Create production build
pnpm run build

# Start production server
pnpm run start
```

The production server will also run on [http://localhost:3002](http://localhost:3002).

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
