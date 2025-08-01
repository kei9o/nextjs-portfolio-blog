import { render, screen } from '@testing-library/react'
import Footer from '@/app/components/footer'

// Mock the current year for consistent testing
const MOCK_YEAR = 2024
const originalDate = Date

beforeAll(() => {
  // Mock Date constructor to return consistent year
  global.Date = class extends Date {
    constructor(date?: string | number | Date) {
      if (date) {
        super(date)
      } else {
        super('2024-01-01T00:00:00.000Z')
      }
    }

    static now() {
      return new originalDate('2024-01-01T00:00:00.000Z').getTime()
    }

    getFullYear() {
      return MOCK_YEAR
    }
  } as typeof Date
})

afterAll(() => {
  global.Date = originalDate
})

// Define expected links at top level for reuse across tests
const expectedLinks = [
  {
    text: 'X',
    href: 'https://x.com/kei9o_',
    testId: 'social-link-x',
  },
  {
    text: 'LinkedIn',
    href: 'https://www.linkedin.com/in/keigo-yamauchi-778304273/',
    testId: 'social-link-linkedin',
  },
  {
    text: 'github',
    href: 'https://github.com/kei9o',
    testId: 'social-link-github',
  },
  {
    text: 'view source',
    href: 'https://github.com/kei9o/nextjs-portfolio-blog',
    testId: 'social-link-source',
  },
]

describe('Footer Component', () => {
  beforeEach(() => {
    render(<Footer />)
  })

  describe('Structure and Layout', () => {
    it('renders footer element with correct structure', () => {
      const footer = screen.getByRole('contentinfo')
      expect(footer).toBeInTheDocument()
      expect(footer).toHaveClass('mb-16')
    })

    it('renders social links list with correct styling', () => {
      const list = screen.getByRole('list')
      expect(list).toBeInTheDocument()
      expect(list).toHaveClass(
        'font-sm',
        'mt-8',
        'flex',
        'flex-col',
        'space-x-0',
        'space-y-2',
        'text-neutral-600'
      )
    })
  })

  describe('Social Links', () => {
    it('renders all social links with correct text and URLs', () => {
      expectedLinks.forEach(({ text, href }) => {
        const link = screen.getByRole('link', { name: text })
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute('href', href)
      })
    })

    it('applies correct security attributes to all external links', () => {
      expectedLinks.forEach(({ text }) => {
        const link = screen.getByRole('link', { name: text })
        expect(link).toHaveAttribute('target', '_blank')
        expect(link).toHaveAttribute('rel', 'noopener noreferrer')
      })
    })

    it('applies correct CSS classes to all social links', () => {
      expectedLinks.forEach(({ text }) => {
        const link = screen.getByRole('link', { name: text })
        expect(link).toHaveClass(
          'flex',
          'items-center',
          'transition-all',
          'hover:text-neutral-800',
          'dark:hover:text-neutral-100'
        )
      })
    })

    it('renders arrow icons in each social link', () => {
      const links = screen.getAllByRole('link')
      const socialLinks = links.filter(link =>
        expectedLinks.some(
          expected => link.getAttribute('href') === expected.href
        )
      )

      socialLinks.forEach(link => {
        const svg = link.querySelector('svg')
        expect(svg).toBeInTheDocument()
        expect(svg).toHaveAttribute('width', '12')
        expect(svg).toHaveAttribute('height', '12')
        expect(svg).toHaveAttribute('viewBox', '0 0 12 12')
      })
    })

    it('has proper structure with text elements', () => {
      expectedLinks.forEach(({ text }) => {
        const link = screen.getByRole('link', { name: text })
        const textElement = link.querySelector('p')
        expect(textElement).toBeInTheDocument()
        expect(textElement).toHaveClass('ml-2', 'h-7')
        expect(textElement).toHaveTextContent(text)
      })
    })
  })

  describe('Copyright Section', () => {
    it('renders copyright text with current year', () => {
      const copyrightText = screen.getByText(`© ${MOCK_YEAR} Keigo Yamauchi`)
      expect(copyrightText).toBeInTheDocument()
    })

    it('applies correct styling to copyright text', () => {
      const copyrightText = screen.getByText(`© ${MOCK_YEAR} Keigo Yamauchi`)
      expect(copyrightText).toHaveClass(
        'mt-8',
        'text-neutral-600',
        'dark:text-neutral-300'
      )
    })
  })

  describe('Accessibility', () => {
    it('has proper semantic footer role', () => {
      const footer = screen.getByRole('contentinfo')
      expect(footer).toBeInTheDocument()
    })

    it('all links are keyboard accessible', () => {
      const links = screen.getAllByRole('link')
      links.forEach(link => {
        expect(link).toHaveAttribute('href')
        // Links should be focusable (no tabindex=-1 or disabled attributes)
        expect(link).not.toHaveAttribute('tabindex', '-1')
        expect(link).not.toHaveAttribute('disabled')
      })
    })

    it('external links have proper ARIA attributes', () => {
      expectedLinks.forEach(({ text }) => {
        const link = screen.getByRole('link', { name: text })
        // While not explicitly set, external links with target="_blank"
        // should have security attributes for accessibility
        expect(link).toHaveAttribute('rel', 'noopener noreferrer')
      })
    })
  })

  describe('ArrowIcon Component', () => {
    it('renders SVG with correct attributes', () => {
      const footer = screen.getByRole('contentinfo')
      const svgs = footer.querySelectorAll('svg')

      expect(svgs).toHaveLength(4) // One for each social link

      svgs.forEach(svg => {
        expect(svg).toHaveAttribute('width', '12')
        expect(svg).toHaveAttribute('height', '12')
        expect(svg).toHaveAttribute('viewBox', '0 0 12 12')
        expect(svg).toHaveAttribute('fill', 'none')
        expect(svg).toHaveAttribute('xmlns', 'http://www.w3.org/2000/svg')
      })
    })

    it('renders path element with correct attributes', () => {
      const footer = screen.getByRole('contentinfo')
      const svgs = footer.querySelectorAll('svg')

      svgs.forEach(svg => {
        const path = svg.querySelector('path')
        expect(path).toBeInTheDocument()
        expect(path).toHaveAttribute('fill', 'currentColor')
        expect(path).toHaveAttribute('d')
      })
    })
  })

  describe('Component Integration', () => {
    it('renders all expected elements in correct order', () => {
      const footer = screen.getByRole('contentinfo')
      const list = screen.getByRole('list')
      const copyright = screen.getByText(`© ${MOCK_YEAR} Keigo Yamauchi`)

      // Check DOM structure order
      expect(footer).toContainElement(list)
      expect(footer).toContainElement(copyright)

      // List should come before copyright in DOM order
      const footerChildren = Array.from(footer.children)
      const listIndex = footerChildren.indexOf(list)
      const copyrightIndex = footerChildren.indexOf(copyright)

      expect(listIndex).toBeLessThan(copyrightIndex)
    })

    it('maintains consistent styling across all social links', () => {
      const socialLinks = expectedLinks.map(({ text }) =>
        screen.getByRole('link', { name: text })
      )

      const firstLinkClasses = socialLinks[0].className
      socialLinks.forEach(link => {
        expect(link).toHaveClass(...firstLinkClasses.split(' '))
      })
    })
  })
})