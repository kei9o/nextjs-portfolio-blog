# Posts Component Unit Tests Implementation Guide

## Issue #27: Test: Posts component unit tests

### Context

You are working on implementing comprehensive unit tests for the Posts component in the Next.js portfolio blog project.

### Target Component

**File:** `app/components/posts.tsx`
**Component:** `BlogPosts` function (37 lines)

### Requirements

- Create `__tests__/unit/components/posts.test.tsx`
- Mock blog utilities and data fetching
- Test rendering, sorting, and edge cases
- Establish mocking patterns for async data
- Achieve >90% code coverage

### Key Test Cases to Implement

#### 1. Basic Rendering Tests

```typescript
// Test posts container renders
// Verify posts list display
// Check component structure
```

#### 2. Data Fetching and Mocking Tests

```typescript
// Mock getBlogPosts() function
// Mock formatDate() utility
// Test with different data scenarios
// Handle loading and error states
```

#### 3. Post Metadata Tests

```typescript
// Test post title rendering
// Verify post date formatting
// Check post link generation
// Test metadata accuracy
```

#### 4. Sorting and Filtering Tests

```typescript
// Test posts sorting (newest first)
// Verify chronological order
// Test filtering logic if applicable
```

#### 5. Edge Cases Tests

```typescript
// Test empty state handling
// Test with no posts
// Test with malformed data
// Test error scenarios
```

### Implementation Pattern

Follow the Footer test patterns and build on Nav component tests:

- Use React Testing Library best practices
- Mock external dependencies properly
- Test user-facing behavior
- Use semantic queries
- Include comprehensive data scenarios

### Dependencies to Mock

```typescript
// Blog utilities
jest.mock('app/lib/blog', () => ({
  getBlogPosts: jest.fn(),
  formatDate: jest.fn(),
}));

// Next.js components
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});
```

### Sample Test Data

```typescript
const mockPosts = [
  {
    title: 'Test Post 1',
    slug: 'test-post-1',
    publishedAt: '2024-01-01',
    metadata: {
      title: 'Test Post 1',
      publishedAt: '2024-01-01',
      summary: 'Test summary 1',
    },
  },
  {
    title: 'Test Post 2',
    slug: 'test-post-2',
    publishedAt: '2024-01-02',
    metadata: {
      title: 'Test Post 2',
      publishedAt: '2024-01-02',
      summary: 'Test summary 2',
    },
  },
]
```

### Coverage Goals

- Achieve >90% code coverage
- Test all data scenarios
- Cover sorting and filtering logic
- Include edge cases and error handling

### Acceptance Criteria

- [ ] All tests pass
- [ ] Mocking strategy established for async data
- [ ] Good edge case coverage maintained
- [ ] Fast and isolated tests
- [ ] > 90% code coverage achieved

### Commands to Run

```bash
# Run tests
pnpm test posts.test.tsx

# Run with coverage
pnpm test:coverage posts.test.tsx

# Run in watch mode
pnpm test:watch posts.test.tsx
```

### Next Steps

1. Analyze the Posts component and its dependencies
2. Set up comprehensive mocking strategy
3. Create test file with all scenarios
4. Implement data-driven tests
5. Verify coverage and edge cases
6. Commit and push changes
7. Create pull request for review
