# MDX Components Unit Tests Implementation Guide

## Issue #28: Test: MDX components unit tests

### Context
You are working on implementing comprehensive unit tests for MDX-related components in the Next.js portfolio blog project.

### Target Component
**File:** `app/components/mdx.tsx`
**Components:** Multiple MDX components (110 lines total)

### Requirements
- Create `__tests__/unit/components/mdx.test.tsx`
- Test Table, CustomLink, RoundedImage, Code, Heading components
- Test CustomMDX component composition
- Mock external dependencies (next-mdx-remote, sugar-high)
- Achieve >90% code coverage

### Key Components to Test

#### 1. Table Component
```typescript
// Test table structure rendering
// Verify data prop handling
// Check headers and rows display
// Test responsive table behavior
```

#### 2. CustomLink Component
```typescript
// Test internal link handling
// Test external link behavior
// Test hash/anchor links
// Verify security attributes (rel, target)
// Test link accessibility
```

#### 3. RoundedImage Component
```typescript
// Test image rendering
// Verify alt text and src attributes
// Test responsive image behavior
// Check styling and CSS classes
```

#### 4. Code Component
```typescript
// Test code block rendering
// Mock syntax highlighting (sugar-high)
// Test different language support
// Verify code formatting
```

#### 5. Heading Components (H1-H6)
```typescript
// Test heading hierarchy
// Verify slug generation
// Test anchor link functionality
// Check accessibility attributes
```

#### 6. CustomMDX Component
```typescript
// Test component composition
// Verify prop forwarding
// Test MDX component integration
// Check component mapping
```

### Implementation Pattern
Build on Footer, Nav, and Posts test patterns:
- Use React Testing Library best practices
- Mock complex external dependencies
- Test component variants and props
- Use semantic queries
- Include accessibility tests

### Dependencies to Mock
```typescript
// MDX Remote
jest.mock('next-mdx-remote/rsc', () => ({
  MDXRemote: ({ components, ...props }: any) => (
    <div data-testid="mdx-remote" {...props}>
      {components && Object.keys(components).join(', ')}
    </div>
  ),
}));

// Syntax highlighter
jest.mock('sugar-high', () => ({
  highlight: jest.fn((code: string) => `<highlighted>${code}</highlighted>`),
}));

// Next.js components
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

jest.mock('next/image', () => {
  return ({ src, alt, ...props }: any) => (
    <img src={src} alt={alt} {...props} />
  );
});
```

### Sample Test Data
```typescript
const mockTableData = {
  headers: ['Name', 'Value', 'Description'],
  rows: [
    ['Item 1', '100', 'First item'],
    ['Item 2', '200', 'Second item'],
  ],
};

const mockCodeProps = {
  children: 'console.log("Hello, World!");',
  className: 'language-javascript',
};

const mockImageProps = {
  src: '/test-image.jpg',
  alt: 'Test image',
  width: 400,
  height: 300,
};
```

### Test Categories

#### Component-Specific Tests
- Test each component individually
- Verify props handling
- Check rendering output
- Test component variants

#### Integration Tests
- Test CustomMDX component composition
- Verify component mapping
- Test prop forwarding
- Check MDX integration

#### Accessibility Tests
- Test heading hierarchy
- Verify ARIA attributes
- Check keyboard navigation
- Test screen reader compatibility

#### Edge Cases
- Test with missing props
- Handle malformed data
- Test error scenarios
- Verify fallback behavior

### Coverage Goals
- Achieve >90% code coverage
- Test all component variants
- Cover prop combinations
- Include error handling

### Acceptance Criteria
- [ ] Full MDX component test coverage
- [ ] All component variants tested
- [ ] Props validation included
- [ ] Accessibility requirements covered
- [ ] Visual regression prevention
- [ ] >90% code coverage achieved

### Commands to Run
```bash
# Run tests
pnpm test mdx.test.tsx

# Run with coverage
pnpm test:coverage mdx.test.tsx

# Run in watch mode
pnpm test:watch mdx.test.tsx
```

### Next Steps
1. Analyze all MDX components and their dependencies
2. Set up comprehensive mocking strategy
3. Create test file with component-specific test suites
4. Implement integration tests
5. Add accessibility and edge case tests
6. Verify coverage and quality
7. Commit and push changes
8. Create pull request for review