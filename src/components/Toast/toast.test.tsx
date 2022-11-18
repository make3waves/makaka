import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonProps, ButtonSize, ButtonType } from './button'

const defaultProps = {
  onClick: jest.fn(),
}

const testProps: ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: 'klass',
}

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
}

const roundProps: ButtonProps = {
  round: true,
}

describe('test button components', () => {
  it('should render default button', () => {
    const wrapper = render(<Button {...defaultProps}>Click</Button>)
    const element = wrapper.getByText('Click') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element.disabled).toBeFalsy()
    expect(element).toHaveClass('btn btn-default')
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
  it('should render the components based on different props', () => {
    const wrapper = render(<Button {...testProps}>Click</Button>)
    const element = wrapper.getByText('Click')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn-primary btn-lg klass')
  })
  it('should render a link when btnType equals link and href is provided', () => {
    const wrapper = render(
      <Button btnType={ButtonType.Link} href="https://baidu.com">
        Link
      </Button>,
    )
    const element = wrapper.getByText('Link')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('btn btn-link')
  })
  it('should render disabled button when disabled set to true', () => {
    const wrapper = render(<Button {...disabledProps}>Click</Button>)
    const element = wrapper.getByText('Click') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  })
  it('should render round button when round set to true', () => {
    const wrapper = render(<Button {...roundProps}>Click</Button>)
    const element = wrapper.getByText('Click') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn-round')
  })
})
