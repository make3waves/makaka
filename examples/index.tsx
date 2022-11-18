import React from 'react'
import ReactDOM from 'react-dom/client'
// 这里是重点！！！
// App为库的入口，模拟外部引入
import App from '../src/App'

const containerStyle: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div style={containerStyle}>
      <a href="./examples/test.html">跳转到线上包预览页面</a>
      <div>这是本地预览页面</div>
      <div>
        <App />
      </div>
    </div>
  </React.StrictMode>,
)
