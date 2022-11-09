import React from 'react'
import { createRoot } from 'react-dom/client'
import { Button } from 'makaka'
import 'makaka/lib/style.css'

const containerStyle: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}

const App: React.FC = () => {
  return (
    <div style={containerStyle}>
      <a href="/index.html">返回</a>
      <div>这是线上包预览页面</div>
      <div>
        <Button
          btnType="primary"
          size="lg"
          round
          onClick={(e) => {
            alert('线上包 测试 success!')
          }}
        >
          点击
        </Button>
      </div>
    </div>
  )
}

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
