import React from 'react'

interface BaseToastProps {
  message?: string
  duration?: number
}

type AnchorToastProps = BaseToastProps & React.AnchorHTMLAttributes<HTMLElement>
export type ToastProps = Partial<AnchorToastProps>

const Toast: React.FC<ToastProps> = (props) => {
  const { message, duration } = props

  return <div className="toast">{message}</div>
}

Toast.defaultProps = {
  message: '',
  duration: 3000,
}

export default Toast
