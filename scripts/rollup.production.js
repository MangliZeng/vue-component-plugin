import bannerString from './rollup.banner'
import commonjs from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue'
import babel from 'rollup-plugin-babel'

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
    vue({
      css: true,
      compileTemplate: true,
      include: /\.vue$/
    }),
    babel({
      presets: ['@vue/babel-preset-jsx'],
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue']
    }),
    commonjs({
      exclude: '/node_modules/'
    })
  ]
}
