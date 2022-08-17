import bannerString from './rollup.banner'
import commonjs from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue'

export default {
  external: ['vue'],
  input: './src/index.js',
  output: {
    format: 'umd',
    dir: './dist/',
    name: 'vueComponentPlugin',
    globals: {
      vue: 'Vue'
    },
    banner: bannerString.replace(/\n/, '')
  },
  plugins: [
    commonjs({
      include: '/node_modules/'
    }),
    vue({
      css: true,
      compileTemplate: true,
      include: /\.vue$/,
      target: 'browser'
    })
  ]
}
