<h1 align="center">makaka</h1>

<p align="center">
  轻量级 React 组件库
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/makaka">
    <img src="https://img.shields.io/npm/v/makaka" />
  </a>
  <a href="https://www.npmjs.com/package/makaka">
    <img src="https://img.shields.io/npm/dt/makaka.svg">
  </a>
  <a href="https://github.com/make3waves/makaka/actions/workflows/release.yml">
    <img src="https://github.com/make3waves/makaka/actions/workflows/release.yml/badge.svg" />
  </a>
</p>

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

发布 NPM 包通过 Github Actions 自动发布，合并到 main 分支即会自动发包

### TODOLIST

- [] 样式前缀名
- [] 按需加载
- [] 组件支持SSR
- [] 浏览器引入 [案例](https://ant.design/docs/react/introduce-cn#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%BC%95%E5%85%A5)
- [] 兼容环境 [案例](https://ant.design/docs/react/introduce-cn#%E5%85%BC%E5%AE%B9%E7%8E%AF%E5%A2%83)

### 参考

[nutui-react](https://nutui.jd.com/react/#/zh-CN/guide/start-react)
