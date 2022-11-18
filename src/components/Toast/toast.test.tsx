import Toast, { ToastProps } from './toast'

const testProps: ToastProps = {
  message: '你好，我是命令式组件 Toast 。',
}

describe('test toast components', () => {
  it('should render toast', () => {
    Toast(testProps)
    setTimeout(() => {
      const element = document.querySelector('.toast')
      expect(element?.innerHTML).toBe(testProps.message)
      expect(element).toHaveClass('toast')
      setTimeout(() => {
        expect(element).not.toBeTruthy()
      }, 4000)
    }, 0)
  })
})
