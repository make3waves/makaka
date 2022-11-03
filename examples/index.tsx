import React from "react";
import ReactDOM from "react-dom";
// 这里是重点！！！
// App为库的入口，模拟外部引入
import App from "../src/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
