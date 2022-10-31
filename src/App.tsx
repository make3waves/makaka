import React from 'react'
import Button, { ButtonType, ButtonSize } from './components/Button/button'

const App: React.FC = () => {
  return (
    <div>
      <Button
        btnType={ButtonType.Primary}
        size={ButtonSize.Large}
        onClick={(e) => {
          alert(1)
        }}
      >
        点击
      </Button>
    </div>
  )
}

export default App
