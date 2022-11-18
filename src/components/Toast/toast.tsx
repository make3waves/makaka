import React from 'react'
import { createRoot } from 'react-dom/client'

interface BaseToastProps {
  message?: string | React.ReactNode
  duration?: number
  style?: React.CSSProperties
}

type AnchorToastProps = BaseToastProps & React.AnchorHTMLAttributes<HTMLElement>
export type ToastProps = Partial<AnchorToastProps>

const Toast = (props: string | ToastProps) => {
  const defaultDuration = 3000

  let message: BaseToastProps['message']
  let duration: BaseToastProps['duration'] = defaultDuration

  if (typeof props === 'string') {
    message = props
  } else {
    message = props.message
    duration = props.duration || defaultDuration
  }
  const content = <div className="toast">{message}</div>

  const container = document.createElement('div')
  document.body.appendChild(container)

  const root = createRoot(container)

  const init = () => {
    const id = setTimeout(() => {
      clearTimeout(id)
      root.unmount()
      document.body.removeChild(container)
    }, duration)
  }

  init()

  return root.render(content)
}

export default Toast
