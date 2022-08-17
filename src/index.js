/**
 * 打包入口 外面属性传入当前的全局属性
 * 方便页面调用，eg: 请求$request，在vue页面中通过this.$request调用
 */
import tableRouter from './table.js'

const install = function (Vue, opts = {}) {
  // 页面请求封装和整个系统保持一致
  Vue.prototype.$request = opts.$request
  // 动态加载路由
  opts.$router.addRoutes(tableRouter)
}
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
