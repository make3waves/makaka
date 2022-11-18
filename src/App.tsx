import React from 'react'
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Toast from './components/Toast/toast'
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

Toast('你好，我是一个命令式组件，我通过调用命令生成一个DOM节点。')

export default App
