import React from 'react'
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import './styles/index.scss'

const App: React.FC = () => {
  return (
    <Button
      btnType={ButtonType.Primary}
      size={ButtonSize.Large}
      round
      onClick={(e) => {
        alert('本地包 测试 success!')
      }}
    >
      点击
    </Button>
  )
}

export default App
