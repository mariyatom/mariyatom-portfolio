// @vitest-environment jsdom
import '@testing-library/jest-dom'

import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import About from '../components/About'

describe('About', () => {
  beforeEach(() => {
    render(<About />)
  })

  it('renders headings and intro paragraphs', () => {
    expect(screen.getByText('About Me.')).toBeInTheDocument()
    expect(
      screen.getByText(/Hi, I’m Mariya - a full-stack developer/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/My tech journey started with an Electronics/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Now in Aotearoa, I’m back in tech/i)
    ).toBeInTheDocument()
  })

  it('renders all interest buttons', () => {
    expect(screen.getByText('Nature')).toBeInTheDocument()
    expect(screen.getByText('Travel')).toBeInTheDocument()
    expect(screen.getByText('Coding')).toBeInTheDocument()
    expect(screen.getByText('Cooking')).toBeInTheDocument()
  })

  it('changes image on hover over interest buttons', () => {
    render(<About />)

    const image = screen.getAllByAltText(
      'Profile Visual'
    )[0] as HTMLImageElement
    const imageProfile = screen.getAllByTestId(
      'profile-image'
    )[0] as HTMLImageElement
    // console.log(screen.getAllByTestId('profile-image').length)

    const codingButton = screen.getAllByText('Coding')[0]

    expect(image.src).toContain('/assets/mariya.WebP') // default image
    expect(imageProfile.src).toContain('/assets/mariya.WebP') // default

    fireEvent.mouseEnter(codingButton)
    expect(image.src).toContain('/assets/code.WebP')

    fireEvent.mouseLeave(codingButton)
    expect(image.src).toContain('/assets/mariya.WebP') // resets on leave
  })
})
