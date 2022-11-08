import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import typescript from '@rollup/plugin-typescript'
import config from './package.json'

function resolve(str: string) {
  return path.resolve(__dirname, str)
}

// https://vitejs.cn/vite3-cn/config/build-options.html
export default defineConfig({
  plugins: [
    react(),
    // 目前的配置只会构建出 js 代码，对于 typescript 类型，需要借助 rollup 的 typescript 插件来实现
    typescript({
      target: 'es5',
      rootDir: resolve('src/'),
      declaration: true,
      declarationDir: resolve('lib'),
      exclude: [
        resolve('node_modules/**'),
        resolve('src/stories/**'),
        resolve('src/**/*.stories.*'),
        resolve('src/**/*.test.*'),
      ],
      allowSyntheticDefaultImports: true,
    }),
  ],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    // 打包输出的目录
    outDir: 'lib',
    // 防止 vite 将 rgba() 颜色转化为 #RGBA 十六进制
    cssTarget: 'chrome61',
    lib: {
      // 组件库源码的入口文件
      entry: resolve('src/main.tsx'),
      // 组件库名称
      name: 'makaka',
      // 文件名称, 打包结果举例: my-packages.umd.cjs
      fileName: 'makaka',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react', 'react-dom'],
      output: {
        // 生成文件头部水印
        banner: `
        /*!
        * ${config.name} v${config.version} 
        * ${config.repository.url}
        * (c) 2022 @make3waves
        * Released under the ${config.license} License.
        */
        `,
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'react',
          'react-dom': 'react-dom',
        },
      },
    },
  },
})
