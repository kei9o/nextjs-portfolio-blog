import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from '@/app/components/nav'

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

// Define expected navigation items
const expectedNavItems = [
  { href: '/', name: 'home' },
  { href: '/about', name: 'about' },
  { href: '/contact', name: 'contact' },
]

describe('Navbar Component', () => {
  beforeEach(() => {
    render(<Navbar />)
  })

  describe('Structure and Layout', () => {
    it('renders aside element with correct structure', () => {
      const aside = screen.getByRole('complementary')
      expect(aside).toBeInTheDocument()
      expect(aside).toHaveClass('-ml-[8px]', 'mb-16', 'tracking-tight')
    })

    it('renders sticky container with correct styling', () => {
      const aside = screen.getByRole('complementary')
      const stickyContainer = aside.querySelector('.lg\\:sticky')
      expect(stickyContainer).toBeInTheDocument()
      expect(stickyContainer).toHaveClass('lg:sticky', 'lg:top-20')
    })

    it('renders navigation element with correct attributes', () => {
      const nav = screen.getByRole('navigation')
      expect(nav).toBeInTheDocument()
      expect(nav).toHaveAttribute('id', 'nav')
      expect(nav).toHaveClass(
        'flex',
        'flex-row',
        'items-start',
        'relative',
        'px-0',
        'pb-0',
        'fade',
        'md:overflow-auto',
        'scroll-pr-6',
        'md:relative'
      )
    })

    it('renders flex container for navigation items', () => {
      const nav = screen.getByRole('navigation')
      const flexContainer = nav.querySelector('.flex.flex-row.space-x-0')
      expect(flexContainer).toBeInTheDocument()
      expect(flexContainer).toHaveClass(
        'flex',
        'flex-row',
        'space-x-0',
        'pr-10'
      )
    })
  })

  describe('Navigation Links', () => {
    it('renders all expected navigation links', () => {
      expectedNavItems.forEach(({ href, name }) => {
        const link = screen.getByRole('link', { name })
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute('href', href)
      })
    })

    it('renders correct number of navigation links', () => {
      const links = screen.getAllByRole('link')
      expect(links).toHaveLength(expectedNavItems.length)
    })

    it('applies correct CSS classes to all navigation links', () => {
      expectedNavItems.forEach(({ name }) => {
        const link = screen.getByRole('link', { name })
        expect(link).toHaveClass(
          'transition-all',
          'hover:text-neutral-800',
          'dark:hover:text-neutral-200',
          'flex',
          'align-middle',
          'relative',
          'py-1',
          'px-2',
          'm-1'
        )
      })
    })

    it('renders link text content correctly', () => {
      expectedNavItems.forEach(({ name }) => {
        const link = screen.getByRole('link', { name })
        expect(link).toHaveTextContent(name)
      })
    })

    it('uses correct href attributes for navigation', () => {
      const homeLink = screen.getByRole('link', { name: 'home' })
      const aboutLink = screen.getByRole('link', { name: 'about' })
      const contactLink = screen.getByRole('link', { name: 'contact' })

      expect(homeLink).toHaveAttribute('href', '/')
      expect(aboutLink).toHaveAttribute('href', '/about')
      expect(contactLink).toHaveAttribute('href', '/contact')
    })
  })

  describe('Responsive Behavior', () => {
    it('applies responsive classes for sticky positioning', () => {
      const aside = screen.getByRole('complementary')
      const stickyContainer = aside.querySelector('.lg\\:sticky')
      expect(stickyContainer).toHaveClass('lg:sticky', 'lg:top-20')
    })

    it('applies responsive classes for navigation overflow', () => {
      const nav = screen.getByRole('navigation')
      expect(nav).toHaveClass('md:overflow-auto', 'md:relative')
    })

    it('renders with proper spacing for mobile and desktop', () => {
      const nav = screen.getByRole('navigation')
      const flexContainer = nav.querySelector('.flex.flex-row.space-x-0')
      expect(flexContainer).toHaveClass('space-x-0', 'pr-10')
    })
  })

  describe('Accessibility', () => {
    it('has proper semantic navigation role', () => {
      const nav = screen.getByRole('navigation')
      expect(nav).toBeInTheDocument()
    })

    it('has proper semantic aside role for main navigation', () => {
      const aside = screen.getByRole('complementary')
      expect(aside).toBeInTheDocument()
    })

    it('navigation has proper id attribute for accessibility', () => {
      const nav = screen.getByRole('navigation')
      expect(nav).toHaveAttribute('id', 'nav')
    })

    it('all navigation links are keyboard accessible', () => {
      const links = screen.getAllByRole('link')
      links.forEach(link => {
        expect(link).toHaveAttribute('href')
        expect(link).not.toHaveAttribute('tabindex', '-1')
        expect(link).not.toHaveAttribute('disabled')
      })
    })

    it('navigation links have proper focus states', () => {
      expectedNavItems.forEach(({ name }) => {
        const link = screen.getByRole('link', { name })
        // Check that transition-all class is applied for focus transitions
        expect(link).toHaveClass('transition-all')
      })
    })
  })

  describe('Navigation Behavior', () => {
    it('renders navigation items in correct order', () => {
      const links = screen.getAllByRole('link')
      const linkTexts = links.map(link => link.textContent)

      expect(linkTexts).toEqual(['home', 'about', 'contact'])
    })

    it('maintains consistent styling across all navigation links', () => {
      const links = screen.getAllByRole('link')
      const firstLinkClasses = links[0].className

      links.forEach(link => {
        expect(link).toHaveClass(...firstLinkClasses.split(' '))
      })
    })
  })

  describe('Hover States', () => {
    it('applies hover classes for light mode', () => {
      expectedNavItems.forEach(({ name }) => {
        const link = screen.getByRole('link', { name })
        expect(link).toHaveClass('hover:text-neutral-800')
      })
    })

    it('applies hover classes for dark mode', () => {
      expectedNavItems.forEach(({ name }) => {
        const link = screen.getByRole('link', { name })
        expect(link).toHaveClass('dark:hover:text-neutral-200')
      })
    })

    it('has transition effects for hover states', () => {
      expectedNavItems.forEach(({ name }) => {
        const link = screen.getByRole('link', { name })
        expect(link).toHaveClass('transition-all')
      })
    })
  })

  describe('User Interaction', () => {
    it('allows keyboard navigation between links', async () => {
      const user = userEvent.setup()
      const homeLink = screen.getByRole('link', { name: 'home' })
      const aboutLink = screen.getByRole('link', { name: 'about' })

      // Focus first link
      await user.tab()
      expect(homeLink).toHaveFocus()

      // Tab to next link
      await user.tab()
      expect(aboutLink).toHaveFocus()
    })

    it('supports click navigation', async () => {
      const user = userEvent.setup()
      const homeLink = screen.getByRole('link', { name: 'home' })

      // Click should not throw error (href handling is mocked)
      await user.click(homeLink)
      expect(homeLink).toHaveAttribute('href', '/')
    })
  })

  describe('Component Integration', () => {
    it('renders all navigation elements in correct DOM hierarchy', () => {
      const aside = screen.getByRole('complementary')
      const nav = screen.getByRole('navigation')
      const links = screen.getAllByRole('link')

      // Check DOM hierarchy
      expect(aside).toContainElement(nav)
      links.forEach(link => {
        expect(nav).toContainElement(link)
      })
    })

    it('maintains proper structure with sticky positioning', () => {
      const aside = screen.getByRole('complementary')
      const stickyContainer = aside.querySelector('.lg\\:sticky')
      const nav = screen.getByRole('navigation')

      expect(stickyContainer).toContainElement(nav)
    })

    it('renders navigation items within flex container', () => {
      const nav = screen.getByRole('navigation')
      const flexContainer = nav.querySelector('.flex.flex-row.space-x-0.pr-10')
      const links = screen.getAllByRole('link')

      expect(flexContainer).toBeInTheDocument()
      links.forEach(link => {
        expect(flexContainer).toContainElement(link)
      })
    })
  })

  describe('CSS Classes and Styling', () => {
    it('applies correct base styling to aside element', () => {
      const aside = screen.getByRole('complementary')
      expect(aside).toHaveClass('-ml-[8px]', 'mb-16', 'tracking-tight')
    })

    it('applies correct navigation styling', () => {
      const nav = screen.getByRole('navigation')
      expect(nav).toHaveClass(
        'flex',
        'flex-row',
        'items-start',
        'relative',
        'px-0',
        'pb-0',
        'fade'
      )
    })

    it('applies consistent link styling', () => {
      const links = screen.getAllByRole('link')
      const expectedClasses = [
        'transition-all',
        'hover:text-neutral-800',
        'dark:hover:text-neutral-200',
        'flex',
        'align-middle',
        'relative',
        'py-1',
        'px-2',
        'm-1',
      ]

      links.forEach(link => {
        expectedClasses.forEach(className => {
          expect(link).toHaveClass(className)
        })
      })
    })
  })
})
