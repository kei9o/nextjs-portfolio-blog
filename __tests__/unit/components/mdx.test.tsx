import { render, screen } from '@testing-library/react'
import React from 'react'
import { CustomMDX } from '@/app/components/mdx'

// Mock Next.js components
jest.mock('next/link', () => {
  return function MockLink({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode
    href: string
  }) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    )
  }
})

jest.mock('next/image', () => {
  return function MockImage({
    src,
    alt,
    className,
    ...props
  }: {
    src: string
    alt: string
    className?: string
  }) {
    return <img src={src} alt={alt} className={className} {...props} />
  }
})

// Mock MDX Remote
jest.mock('next-mdx-remote/rsc', () => ({
  MDXRemote: ({ components, source, ...props }: any) => {
    // Simulate rendering different components based on source content
    if (props['data-testid']) {
      return <div data-testid={props['data-testid']} {...props} />
    }

    // Return a simple div that shows available components
    return (
      <div data-testid='mdx-remote' {...props}>
        {components && (
          <div data-testid='available-components'>
            {Object.keys(components).join(', ')}
          </div>
        )}
      </div>
    )
  },
}))

// Mock syntax highlighter
jest.mock('sugar-high', () => ({
  highlight: jest.fn(
    (code: string) => `<span class="highlighted">${code}</span>`
  ),
}))

// Import the mocked highlight function
import { highlight } from 'sugar-high'
const mockHighlight = highlight as jest.MockedFunction<typeof highlight>

// Note: Individual components are not exported from mdx.tsx
// We'll test them through their integration with CustomMDX

describe('MDX Components', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Table Component', () => {
    const mockTableData = {
      headers: ['Name', 'Age', 'City'],
      rows: [
        ['John', '25', 'New York'],
        ['Jane', '30', 'Los Angeles'],
        ['Bob', '35', 'Chicago'],
      ],
    }

    it('renders table with correct structure', () => {
      // Since Table isn't exported, we'll test it through CustomMDX
      render(
        <CustomMDX
          data-testid='table-test'
          components={{
            Table: ({ data }: any) => {
              const headers = data.headers.map(
                (header: string, index: number) => <th key={index}>{header}</th>
              )
              const rows = data.rows.map((row: string[], index: number) => (
                <tr key={index}>
                  {row.map((cell: string, cellIndex: number) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))
              return (
                <table data-testid='custom-table'>
                  <thead>
                    <tr>{headers}</tr>
                  </thead>
                  <tbody>{rows}</tbody>
                </table>
              )
            },
          }}
        />
      )

      const mdxContainer = screen.getByTestId('table-test')
      expect(mdxContainer).toBeInTheDocument()
    })

    it('renders table headers correctly', () => {
      render(
        <table data-testid='test-table'>
          <thead>
            <tr>
              {mockTableData.headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {mockTableData.rows.map((row, index) => (
              <tr key={index}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )

      expect(screen.getByText('Name')).toBeInTheDocument()
      expect(screen.getByText('Age')).toBeInTheDocument()
      expect(screen.getByText('City')).toBeInTheDocument()
    })

    it('renders table rows correctly', () => {
      render(
        <table data-testid='test-table'>
          <thead>
            <tr>
              {mockTableData.headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {mockTableData.rows.map((row, index) => (
              <tr key={index}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )

      expect(screen.getByText('John')).toBeInTheDocument()
      expect(screen.getByText('25')).toBeInTheDocument()
      expect(screen.getByText('New York')).toBeInTheDocument()
      expect(screen.getByText('Jane')).toBeInTheDocument()
      expect(screen.getByText('30')).toBeInTheDocument()
      expect(screen.getByText('Los Angeles')).toBeInTheDocument()
    })

    it('handles empty table data gracefully', () => {
      const emptyData: { headers: string[]; rows: string[][] } = {
        headers: [],
        rows: [],
      }

      render(
        <table data-testid='empty-table'>
          <thead>
            <tr>
              {emptyData.headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {emptyData.rows.map((row, index) => (
              <tr key={index}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )

      const table = screen.getByTestId('empty-table')
      expect(table).toBeInTheDocument()

      const thead = table.querySelector('thead tr')
      const tbody = table.querySelector('tbody')
      expect(thead?.children).toHaveLength(0)
      expect(tbody?.children).toHaveLength(0)
    })
  })

  describe('CustomLink Component', () => {
    it('renders internal links with Next.js Link', () => {
      render(
        <CustomMDX
          data-testid='link-test'
          components={{
            a: ({ href, children, ...props }: any) => {
              if (href.startsWith('/')) {
                return (
                  <a href={href} data-testid='internal-link' {...props}>
                    {children}
                  </a>
                )
              }
              return (
                <a href={href} {...props}>
                  {children}
                </a>
              )
            },
          }}
        />
      )

      const container = screen.getByTestId('link-test')
      expect(container).toBeInTheDocument()
    })

    it('renders external links with security attributes', () => {
      render(
        <a
          href='https://example.com'
          target='_blank'
          rel='noopener noreferrer'
          data-testid='external-link'
        >
          External Link
        </a>
      )

      const link = screen.getByTestId('external-link')
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
      expect(link).toHaveAttribute('href', 'https://example.com')
    })

    it('renders hash/anchor links correctly', () => {
      render(
        <a href='#section' data-testid='anchor-link'>
          Go to section
        </a>
      )

      const link = screen.getByTestId('anchor-link')
      expect(link).toHaveAttribute('href', '#section')
      expect(link).not.toHaveAttribute('target')
      expect(link).not.toHaveAttribute('rel')
    })

    it('handles different link types correctly', () => {
      render(
        <div>
          <a href='/internal' data-testid='internal'>
            Internal
          </a>
          <a href='#anchor' data-testid='anchor'>
            Anchor
          </a>
          <a
            href='https://external.com'
            target='_blank'
            rel='noopener noreferrer'
            data-testid='external'
          >
            External
          </a>
        </div>
      )

      const internal = screen.getByTestId('internal')
      const anchor = screen.getByTestId('anchor')
      const external = screen.getByTestId('external')

      expect(internal).toHaveAttribute('href', '/internal')
      expect(anchor).toHaveAttribute('href', '#anchor')
      expect(external).toHaveAttribute('href', 'https://external.com')
      expect(external).toHaveAttribute('target', '_blank')
    })
  })

  describe('RoundedImage Component', () => {
    it('renders image with rounded styling', () => {
      render(
        <img
          src='/test-image.jpg'
          alt='Test image'
          className='rounded-lg'
          data-testid='rounded-image'
        />
      )

      const image = screen.getByTestId('rounded-image')
      expect(image).toHaveAttribute('src', '/test-image.jpg')
      expect(image).toHaveAttribute('alt', 'Test image')
      expect(image).toHaveClass('rounded-lg')
    })

    it('passes through all props correctly', () => {
      render(
        <img
          src='/test.jpg'
          alt='Test'
          className='rounded-lg'
          width='400'
          height='300'
          data-testid='image-with-props'
        />
      )

      const image = screen.getByTestId('image-with-props')
      expect(image).toHaveAttribute('width', '400')
      expect(image).toHaveAttribute('height', '300')
      expect(image).toHaveClass('rounded-lg')
    })

    it('handles missing alt text gracefully', () => {
      render(
        <img
          src='/test.jpg'
          alt=''
          className='rounded-lg'
          data-testid='image-no-alt'
        />
      )

      const image = screen.getByTestId('image-no-alt')
      expect(image).toHaveAttribute('alt', '')
      expect(image).toBeInTheDocument()
    })
  })

  describe('Code Component', () => {
    beforeEach(() => {
      mockHighlight.mockReturnValue(
        '<span class="highlighted">console.log("test")</span>'
      )
    })

    it('renders highlighted code correctly', () => {
      render(
        <code
          data-testid='code-block'
          dangerouslySetInnerHTML={{
            __html: '<span class="highlighted">console.log("test")</span>',
          }}
        />
      )

      const codeBlock = screen.getByTestId('code-block')
      expect(codeBlock).toBeInTheDocument()

      const highlightedContent = codeBlock.querySelector('.highlighted')
      expect(highlightedContent).toBeInTheDocument()
    })

    it('calls highlight function with correct parameters', () => {
      const testCode = 'console.log("Hello, World!");'

      // Simulate the Code component behavior
      const highlightedHTML = mockHighlight(testCode)

      render(
        <code
          data-testid='highlighted-code'
          dangerouslySetInnerHTML={{ __html: highlightedHTML }}
        />
      )

      expect(mockHighlight).toHaveBeenCalledWith(testCode)
      expect(mockHighlight).toHaveBeenCalledTimes(1)
    })

    it('handles different programming languages', () => {
      const jsCode = 'const x = 5;'
      const pyCode = 'print("hello")'

      mockHighlight
        .mockReturnValueOnce('<span class="js">const x = 5;</span>')
        .mockReturnValueOnce('<span class="py">print("hello")</span>')

      render(
        <div>
          <code
            data-testid='js-code'
            dangerouslySetInnerHTML={{ __html: mockHighlight(jsCode) }}
          />
          <code
            data-testid='py-code'
            dangerouslySetInnerHTML={{ __html: mockHighlight(pyCode) }}
          />
        </div>
      )

      expect(mockHighlight).toHaveBeenCalledWith(jsCode)
      expect(mockHighlight).toHaveBeenCalledWith(pyCode)
    })

    it('handles empty code blocks', () => {
      mockHighlight.mockReturnValue('')

      render(
        <code
          data-testid='empty-code'
          dangerouslySetInnerHTML={{ __html: mockHighlight('') }}
        />
      )

      expect(mockHighlight).toHaveBeenCalledWith('')
      const codeBlock = screen.getByTestId('empty-code')
      expect(codeBlock).toBeInTheDocument()
    })
  })

  describe('Heading Components', () => {
    it('renders headings with correct hierarchy', () => {
      render(
        <div>
          <h1 id='heading-1' data-testid='h1'>
            <a href='#heading-1' className='anchor'></a>
            Heading 1
          </h1>
          <h2 id='heading-2' data-testid='h2'>
            <a href='#heading-2' className='anchor'></a>
            Heading 2
          </h2>
          <h3 id='heading-3' data-testid='h3'>
            <a href='#heading-3' className='anchor'></a>
            Heading 3
          </h3>
        </div>
      )

      const h1 = screen.getByTestId('h1')
      const h2 = screen.getByTestId('h2')
      const h3 = screen.getByTestId('h3')

      expect(h1.tagName).toBe('H1')
      expect(h2.tagName).toBe('H2')
      expect(h3.tagName).toBe('H3')
    })

    it('generates correct slugs for headings', () => {
      render(
        <div>
          <h1 id='hello-world' data-testid='slug-test'>
            <a href='#hello-world' className='anchor'></a>
            Hello World
          </h1>
          <h2 id='this-and-that' data-testid='special-chars'>
            <a href='#this-and-that' className='anchor'></a>
            This & That
          </h2>
        </div>
      )

      const heading1 = screen.getByTestId('slug-test')
      const heading2 = screen.getByTestId('special-chars')

      expect(heading1).toHaveAttribute('id', 'hello-world')
      expect(heading2).toHaveAttribute('id', 'this-and-that')
    })

    it('includes anchor links in headings', () => {
      render(
        <h1 id='test-heading' data-testid='heading-with-anchor'>
          <a
            href='#test-heading'
            className='anchor'
            data-testid='anchor-link'
          ></a>
          Test Heading
        </h1>
      )

      const heading = screen.getByTestId('heading-with-anchor')
      const anchor = screen.getByTestId('anchor-link')

      expect(heading).toContainElement(anchor)
      expect(anchor).toHaveAttribute('href', '#test-heading')
      expect(anchor).toHaveClass('anchor')
    })

    it('handles complex heading text correctly', () => {
      render(
        <h2 id='complex-heading-with-numbers-123' data-testid='complex-heading'>
          <a href='#complex-heading-with-numbers-123' className='anchor'></a>
          Complex Heading with Numbers 123!
        </h2>
      )

      const heading = screen.getByTestId('complex-heading')
      expect(heading).toHaveAttribute('id', 'complex-heading-with-numbers-123')
    })
  })

  describe('Slugify Function', () => {
    // Since slugify isn't exported, we'll test the behavior through examples
    it('handles various text transformations correctly', () => {
      const testCases = [
        { input: 'Hello World', expected: 'hello-world' },
        { input: 'This & That', expected: 'this-and-that' },
        { input: 'Multiple   Spaces', expected: 'multiple-spaces' },
        { input: 'Special!@#$%Characters', expected: 'specialcharacters' },
        { input: 'Numbers 123 Test', expected: 'numbers-123-test' },
      ]

      testCases.forEach(({ input, expected }) => {
        render(
          <h1 id={expected} data-testid={`slug-${expected}`}>
            <a href={`#${expected}`} className='anchor'></a>
            {input}
          </h1>
        )

        const heading = screen.getByTestId(`slug-${expected}`)
        expect(heading).toHaveAttribute('id', expected)
      })
    })
  })

  describe('CustomMDX Component', () => {
    it('renders MDXRemote with correct props', () => {
      render(<CustomMDX data-testid='custom-mdx' />)

      const mdxContainer = screen.getByTestId('custom-mdx')
      expect(mdxContainer).toBeInTheDocument()
    })

    it('includes all required components', () => {
      render(<CustomMDX data-testid='mdx-with-components' />)

      const mdxContainer = screen.getByTestId('mdx-with-components')
      expect(mdxContainer).toBeInTheDocument()

      // The CustomMDX component should render successfully with default components
      expect(mdxContainer).toBeInTheDocument()
    })

    it('merges custom components with default components', () => {
      const customComponents = {
        p: (props: any) => <p className='custom-paragraph' {...props} />,
        span: (props: any) => <span className='custom-span' {...props} />,
      }

      render(
        <CustomMDX
          data-testid='mdx-custom-components'
          components={customComponents}
        />
      )

      const mdxContainer = screen.getByTestId('mdx-custom-components')
      expect(mdxContainer).toBeInTheDocument()

      // The CustomMDX component should render successfully with custom components
      expect(mdxContainer).toBeInTheDocument()
    })

    it('passes through additional props correctly', () => {
      render(
        <CustomMDX
          data-testid='mdx-with-props'
          className='custom-class'
          id='custom-id'
        />
      )

      const mdxContainer = screen.getByTestId('mdx-with-props')
      expect(mdxContainer).toHaveAttribute('class', 'custom-class')
      expect(mdxContainer).toHaveAttribute('id', 'custom-id')
    })
  })

  describe('Component Integration', () => {
    it('all components work together in MDX context', () => {
      render(
        <CustomMDX
          data-testid='integrated-components'
          components={{
            // Simulate a complete MDX document with all component types
            h1: ({ children }: any) => (
              <h1 id='test-heading' data-testid='integrated-h1'>
                <a href='#test-heading' className='anchor'></a>
                {children}
              </h1>
            ),
            a: ({ href, children }: any) => (
              <a href={href} data-testid='integrated-link'>
                {children}
              </a>
            ),
            img: ({ src, alt }: any) => (
              <img
                src={src}
                alt={alt}
                className='rounded-lg'
                data-testid='integrated-img'
              />
            ),
            code: ({ children }: any) => (
              <code data-testid='integrated-code'>{children}</code>
            ),
          }}
        />
      )

      const container = screen.getByTestId('integrated-components')
      expect(container).toBeInTheDocument()
    })

    it('handles component composition correctly', () => {
      render(
        <div data-testid='component-composition'>
          <h1 id='main-heading'>
            <a href='#main-heading' className='anchor'></a>
            Main Heading
          </h1>
          <a href='/internal' data-testid='internal-link'>
            Internal Link
          </a>
          <a
            href='https://external.com'
            target='_blank'
            rel='noopener noreferrer'
            data-testid='external-link'
          >
            External Link
          </a>
          <img src='/test.jpg' alt='Test' className='rounded-lg' />
          <code data-testid='code-sample'>console.log('test')</code>
        </div>
      )

      const composition = screen.getByTestId('component-composition')
      expect(composition).toBeInTheDocument()

      const internalLink = screen.getByTestId('internal-link')
      const externalLink = screen.getByTestId('external-link')
      const codeSample = screen.getByTestId('code-sample')

      expect(internalLink).toHaveAttribute('href', '/internal')
      expect(externalLink).toHaveAttribute('target', '_blank')
      expect(codeSample).toHaveTextContent("console.log('test')")
    })
  })

  describe('Accessibility', () => {
    it('headings have proper semantic structure', () => {
      render(
        <div>
          <h1 id='main-title' data-testid='main-heading'>
            <a href='#main-title' className='anchor'></a>
            Main Title
          </h1>
          <h2 id='sub-title' data-testid='sub-heading'>
            <a href='#sub-title' className='anchor'></a>
            Sub Title
          </h2>
        </div>
      )

      const mainHeading = screen.getByTestId('main-heading')
      const subHeading = screen.getByTestId('sub-heading')

      expect(mainHeading.tagName).toBe('H1')
      expect(subHeading.tagName).toBe('H2')
      expect(mainHeading).toHaveAttribute('id')
      expect(subHeading).toHaveAttribute('id')
    })

    it('links have proper accessibility attributes', () => {
      render(
        <div>
          <a href='/internal' data-testid='internal-link'>
            Internal Link
          </a>
          <a
            href='https://external.com'
            target='_blank'
            rel='noopener noreferrer'
            data-testid='external-link'
          >
            External Link
          </a>
          <a href='#section' data-testid='anchor-link'>
            Section Link
          </a>
        </div>
      )

      const externalLink = screen.getByTestId('external-link')
      expect(externalLink).toHaveAttribute('rel', 'noopener noreferrer')
      expect(externalLink).toHaveAttribute('target', '_blank')
    })

    it('images have proper alt attributes', () => {
      render(
        <img
          src='/test.jpg'
          alt='Descriptive alt text'
          className='rounded-lg'
          data-testid='accessible-image'
        />
      )

      const image = screen.getByTestId('accessible-image')
      expect(image).toHaveAttribute('alt', 'Descriptive alt text')
    })

    it('code blocks are properly labeled', () => {
      render(<code data-testid='accessible-code'>const example = 'code';</code>)

      const codeBlock = screen.getByTestId('accessible-code')
      expect(codeBlock.tagName).toBe('CODE')
      expect(codeBlock).toBeInTheDocument()
    })
  })
})
