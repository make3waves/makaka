import React from "react";
import ReactDOM from "react-dom"; 
import { default as Button } from 'makaka';
import 'makaka/lib/style.css';

const App: React.FC = () => {
  return (
    <div>
      <Button
        btnType='primary'
        size='lg'
        onClick={(e) => {
          alert('test success!')
        }}
      >
        点击
      </Button>
    </div>
  )
}
 


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
