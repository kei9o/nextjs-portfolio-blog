import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'

// This type allows for custom render options while extending the base RenderOptions
type CustomRenderOptions = Omit<RenderOptions, 'wrapper'>

// Custom render function that can be extended with providers when needed
const customRender = (ui: ReactElement, options?: CustomRenderOptions) => {
  return render(ui, {
    // Add any wrapper providers here when needed (e.g., ThemeProvider, AuthProvider)
    ...options,
  })
}

// Re-export everything from @testing-library/react
export * from '@testing-library/react'

// Override the default render with our custom render
export { customRender as render }
