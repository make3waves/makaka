import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import typescript from '@rollup/plugin-typescript'
import config from './package.json'

const banner = `/*!
* ${config.name} v${config.version} 
* ${config.repository.url}
* (c) 2022 @makaka.
* Released under the ${config.license} License.
*/`

function resolve(str: string) {
  return path.resolve(__dirname, str)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
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
    port: 8000,
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
        banner,
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'react',
          'react-dom': 'react-dom',
        },
      },
    },
  },
})
