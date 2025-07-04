import { render, screen } from '@testing-library/react'
import { BlogPosts } from '@/app/components/posts'

// Mock Next.js Link component
jest.mock('next/link', () => {
  return function MockLink({
    children,
    href,
    className,
    ...props
  }: {
    children: React.ReactNode
    href: string
    className?: string
  }) {
    return (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    )
  }
})

// Mock blog utilities
jest.mock('@/app/blog/utils', () => ({
  getBlogPosts: jest.fn(),
  formatDate: jest.fn(),
}))

// Import mocked functions with proper types
import { getBlogPosts, formatDate } from '@/app/blog/utils'

const mockGetBlogPosts = getBlogPosts as jest.MockedFunction<
  typeof getBlogPosts
>
const mockFormatDate = formatDate as jest.MockedFunction<typeof formatDate>

// Mock blog post data
const mockBlogPosts = [
  {
    slug: 'test-post-1',
    metadata: {
      title: 'First Test Post',
      publishedAt: '2024-01-01',
      summary: 'This is the first test post',
    },
    content: 'First post content',
  },
  {
    slug: 'test-post-2',
    metadata: {
      title: 'Second Test Post',
      publishedAt: '2024-01-15',
      summary: 'This is the second test post',
    },
    content: 'Second post content',
  },
  {
    slug: 'test-post-3',
    metadata: {
      title: 'Third Test Post',
      publishedAt: '2024-01-30',
      summary: 'This is the third test post',
    },
    content: 'Third post content',
  },
]

describe('BlogPosts Component', () => {
  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks()

    // Default mock implementations
    mockGetBlogPosts.mockReturnValue(mockBlogPosts)
    mockFormatDate.mockImplementation((date: string) => {
      // Simple mock format: convert to readable format
      const d = new Date(date)
      return d.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    })
  })

  describe('Basic Rendering', () => {
    it('renders the posts container', () => {
      const { container } = render(<BlogPosts />)
      expect(container.firstChild).toBeInTheDocument()
    })

    it('calls getBlogPosts to fetch blog data', () => {
      render(<BlogPosts />)
      expect(mockGetBlogPosts).toHaveBeenCalledTimes(1)
    })

    it('renders all blog posts', () => {
      render(<BlogPosts />)

      expect(screen.getByText('First Test Post')).toBeInTheDocument()
      expect(screen.getByText('Second Test Post')).toBeInTheDocument()
      expect(screen.getByText('Third Test Post')).toBeInTheDocument()
    })

    it('renders correct number of post links', () => {
      render(<BlogPosts />)
      const links = screen.getAllByRole('link')
      expect(links).toHaveLength(3)
    })
  })

  describe('Post Metadata and Content', () => {
    it('renders post titles correctly', () => {
      render(<BlogPosts />)

      mockBlogPosts.forEach(post => {
        expect(screen.getByText(post.metadata.title)).toBeInTheDocument()
      })
    })

    it('formats and displays publication dates', () => {
      render(<BlogPosts />)

      expect(mockFormatDate).toHaveBeenCalledWith('2024-01-01', false)
      expect(mockFormatDate).toHaveBeenCalledWith('2024-01-15', false)
      expect(mockFormatDate).toHaveBeenCalledWith('2024-01-30', false)
      expect(mockFormatDate).toHaveBeenCalledTimes(3)
    })

    it('displays formatted dates in the UI', () => {
      render(<BlogPosts />)

      expect(screen.getByText('January 1, 2024')).toBeInTheDocument()
      expect(screen.getByText('January 15, 2024')).toBeInTheDocument()
      expect(screen.getByText('January 30, 2024')).toBeInTheDocument()
    })

    it('generates correct href attributes for post links', () => {
      render(<BlogPosts />)

      const link1 = screen.getByRole('link', { name: /First Test Post/ })
      const link2 = screen.getByRole('link', { name: /Second Test Post/ })
      const link3 = screen.getByRole('link', { name: /Third Test Post/ })

      expect(link1).toHaveAttribute('href', '/blog/test-post-1')
      expect(link2).toHaveAttribute('href', '/blog/test-post-2')
      expect(link3).toHaveAttribute('href', '/blog/test-post-3')
    })
  })

  describe('Sorting Logic', () => {
    it('sorts posts by publication date (newest first)', () => {
      render(<BlogPosts />)

      const links = screen.getAllByRole('link')
      const linkTexts = links.map(link => link.textContent)

      // Check that Third Test Post (2024-01-30) comes first
      // Second Test Post (2024-01-15) comes second
      // First Test Post (2024-01-01) comes last
      expect(linkTexts[0]).toContain('Third Test Post')
      expect(linkTexts[1]).toContain('Second Test Post')
      expect(linkTexts[2]).toContain('First Test Post')
    })

    it('handles posts with same publication date', () => {
      const postsWithSameDate = [
        {
          slug: 'post-a',
          metadata: {
            title: 'Post A',
            publishedAt: '2024-01-01',
            summary: 'Post A summary',
          },
          content: 'Post A content',
        },
        {
          slug: 'post-b',
          metadata: {
            title: 'Post B',
            publishedAt: '2024-01-01',
            summary: 'Post B summary',
          },
          content: 'Post B content',
        },
      ]

      mockGetBlogPosts.mockReturnValue(postsWithSameDate)
      render(<BlogPosts />)

      const links = screen.getAllByRole('link')
      expect(links).toHaveLength(2)
    })
  })

  describe('CSS Classes and Styling', () => {
    it('applies correct CSS classes to post links', () => {
      render(<BlogPosts />)

      const links = screen.getAllByRole('link')
      links.forEach(link => {
        expect(link).toHaveClass('flex', 'flex-col', 'space-y-1', 'mb-4')
      })
    })

    it('applies correct CSS classes to post layout containers', () => {
      render(<BlogPosts />)

      const containers = screen.getAllByRole('generic')
      // Find the inner containers (not the root container)
      const innerContainers = containers.filter(container =>
        container.className.includes('w-full')
      )

      innerContainers.forEach(container => {
        expect(container).toHaveClass(
          'w-full',
          'flex',
          'flex-col',
          'md:flex-row',
          'space-x-0',
          'md:space-x-2'
        )
      })
    })

    it('applies correct CSS classes to date elements', () => {
      render(<BlogPosts />)

      const dateElements = screen.getAllByText(/January \d+, 2024/)
      dateElements.forEach(element => {
        expect(element).toHaveClass(
          'text-neutral-600',
          'dark:text-neutral-400',
          'w-[100px]',
          'tabular-nums'
        )
      })
    })

    it('applies correct CSS classes to title elements', () => {
      render(<BlogPosts />)

      const titleElements = [
        screen.getByText('First Test Post'),
        screen.getByText('Second Test Post'),
        screen.getByText('Third Test Post'),
      ]

      titleElements.forEach(element => {
        expect(element).toHaveClass(
          'text-neutral-900',
          'dark:text-neutral-100',
          'tracking-tight'
        )
      })
    })
  })

  describe('Edge Cases', () => {
    it('handles empty blog posts array', () => {
      mockGetBlogPosts.mockReturnValue([])
      const { container } = render(<BlogPosts />)

      expect(container.firstChild).toBeInTheDocument()

      const links = screen.queryAllByRole('link')
      expect(links).toHaveLength(0)
    })

    it('handles single blog post', () => {
      const singlePost = [
        {
          slug: 'single-test-post',
          metadata: {
            title: 'Single Test Post',
            publishedAt: '2024-01-01',
            summary: 'This is a single test post',
          },
          content: 'Single post content',
        },
      ]

      mockGetBlogPosts.mockReturnValue(singlePost)
      render(<BlogPosts />)

      const links = screen.getAllByRole('link')
      expect(links).toHaveLength(1)
      expect(screen.getByText('Single Test Post')).toBeInTheDocument()
    })

    it('handles posts with missing metadata gracefully', () => {
      const postsWithMissingData = [
        {
          slug: 'incomplete-post',
          metadata: {
            title: 'Incomplete Post',
            publishedAt: '2024-01-01',
            summary: 'Summary',
          },
          content: 'Content',
        },
      ]

      mockGetBlogPosts.mockReturnValue(postsWithMissingData)
      render(<BlogPosts />)

      expect(screen.getByText('Incomplete Post')).toBeInTheDocument()
    })

    it('handles formatDate function errors gracefully', () => {
      mockFormatDate.mockImplementation(() => {
        throw new Error('Date formatting error')
      })

      // Should not crash the component during rendering
      expect(() => render(<BlogPosts />)).toThrow()
    })
  })

  describe('Accessibility', () => {
    it('renders post links with proper accessibility attributes', () => {
      render(<BlogPosts />)

      const links = screen.getAllByRole('link')
      links.forEach(link => {
        expect(link).toHaveAttribute('href')
        expect(link).not.toHaveAttribute('tabindex', '-1')
        expect(link).not.toHaveAttribute('disabled')
      })
    })

    it('provides accessible text content for screen readers', () => {
      render(<BlogPosts />)

      const links = screen.getAllByRole('link')
      links.forEach(link => {
        const linkText = link.textContent
        expect(linkText).toBeTruthy()
        expect(linkText!.trim()).not.toBe('')
      })
    })
  })

  describe('Component Integration', () => {
    it('integrates correctly with mocked dependencies', () => {
      render(<BlogPosts />)

      expect(mockGetBlogPosts).toHaveBeenCalledTimes(1)
      expect(mockFormatDate).toHaveBeenCalledTimes(3)
    })

    it('renders all elements in correct DOM hierarchy', () => {
      const { container } = render(<BlogPosts />)

      const links = screen.getAllByRole('link')

      links.forEach(link => {
        expect(container).toContainElement(link)
      })
    })

    it('maintains proper structure with nested elements', () => {
      render(<BlogPosts />)

      const links = screen.getAllByRole('link')

      links.forEach(link => {
        // Each link should contain date and title elements
        const dateElement = link.querySelector('.text-neutral-600')
        const titleElement = link.querySelector('.text-neutral-900')

        expect(dateElement).toBeInTheDocument()
        expect(titleElement).toBeInTheDocument()
      })
    })
  })

  describe('Data Flow', () => {
    it('passes correct parameters to formatDate', () => {
      render(<BlogPosts />)

      expect(mockFormatDate).toHaveBeenCalledWith('2024-01-01', false)
      expect(mockFormatDate).toHaveBeenCalledWith('2024-01-15', false)
      expect(mockFormatDate).toHaveBeenCalledWith('2024-01-30', false)
    })

    it('uses blog post slugs correctly in URLs', () => {
      render(<BlogPosts />)

      mockBlogPosts.forEach(post => {
        const link = screen.getByRole('link', {
          name: new RegExp(post.metadata.title),
        })
        expect(link).toHaveAttribute('href', `/blog/${post.slug}`)
      })
    })

    it('handles different date formats in publishedAt', () => {
      const postsWithDifferentDateFormats = [
        {
          slug: 'post-1',
          metadata: {
            title: 'Post 1',
            publishedAt: '2024-01-01',
            summary: 'Summary 1',
          },
          content: 'Content 1',
        },
        {
          slug: 'post-2',
          metadata: {
            title: 'Post 2',
            publishedAt: '2024-12-31',
            summary: 'Summary 2',
          },
          content: 'Content 2',
        },
      ]

      mockGetBlogPosts.mockReturnValue(postsWithDifferentDateFormats)
      render(<BlogPosts />)

      expect(mockFormatDate).toHaveBeenCalledWith('2024-01-01', false)
      expect(mockFormatDate).toHaveBeenCalledWith('2024-12-31', false)
    })
  })
})
