import { expect, beforeEach, afterEach } from 'vitest'
import { render, cleanup } from '@testing-library/react/pure'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  Route,
  RouterProvider,
  createMemoryRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import * as matchers from '@testing-library/jest-dom/matchers'
import '@testing-library/jest-dom/vitest'
import userEvent from '@testing-library/user-event'
import App from '../components/App' // or wherever your App component is

expect.extend(matchers)

beforeEach(cleanup)
afterEach(cleanup)

export function renderComponent(component: JSX.Element) {
  const user = userEvent.setup()
  return { user, ...render(component) }
}

export function renderRoute(path = '/') {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
  })

  const router = createMemoryRouter(
    createRoutesFromElements(
      <Route path="*" element={<App />} /> // catch-all route to App
    ),
    {
      initialEntries: [path],
    }
  )

  const user = userEvent.setup()

  const screen = render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )

  return { ...screen, user }
}

export function renderApp(location: string) {
  const user = userEvent.setup()
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
  })

  const router = createMemoryRouter(
    createRoutesFromElements(<Route path="*" element={<App />} />),
    {
      initialEntries: [location],
    }
  )

  const screen = render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )

  return { user, ...screen }
}

export function renderWithQuery(component: JSX.Element) {
  const router = createMemoryRouter(
    createRoutesFromElements(<Route path="*" element={component} />),
    {
      initialEntries: ['/'],
    }
  )

  const user = userEvent.setup()
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
  })

  return {
    user,
    ...render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    ),
  }
}
