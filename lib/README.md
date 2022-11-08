# makaka

轻量级 React 组件库

### 使用

#### NPM 安装

```
npm i makaka
```

#### NPM 使用示例

```
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Button } from 'makaka';
import 'makaka/lib/style.css'

ReactDOM.render(
  <div className="App">
    <Button btnType="primary">按钮</Button>
  </div>,
  document.getElementById("app")
);
```

### 组件开发者模式

#### 安装依赖

```
npm i
```

#### 预览

```
npm run dev
```

#### 组件打包

```
npm run build
```

### 参考

[nutui-react](https://nutui.jd.com/react/#/zh-CN/guide/start-react)
