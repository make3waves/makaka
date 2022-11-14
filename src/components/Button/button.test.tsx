import { render, fireEvent, screen } from "@testing-library/react";
import Button, { ButtonProps, ButtonSize, ButtonType } from "./button";

const defaultProps = {
  onClick: jest.fn()
}

const testProps: ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: 'kclass'
}

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn()
}

describe('test Button component', () => {

  it('渲染默认Button', () => {
    render(<Button {...defaultProps}>Nice</Button>)
    const element = screen.getByText('Nice') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
    expect(element.disabled).toBeFalsy()
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })

  it('渲染带有属性的button', () => {
    render(<Button {...testProps}>Nice</Button>)
    const element = screen.getByText('Nice')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn-primary btn-lg kclass')
  })

  it('渲染一个link button', () => {
    render(<Button btnType={ButtonType.Link} href="https://www.baidu.com">Link</Button>)
    const element = screen.getByText('Link')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('btn btn-link')
  })

  it('渲染一个disabled状态的button', () => {
    render(<Button {...disabledProps}>disabled</Button>)
    const element = screen.getByText('disabled') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  })
})