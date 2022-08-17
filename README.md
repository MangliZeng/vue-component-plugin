# vue-component-plugin

程序系统功能插件化 demo

## 做这个事情的初衷

公司后台管理系统的部分业务功能插件化，如：用户信息模块、角色管理模块、菜单功能权限模块、系统管理模块，把每个模块都单独实现一个项目小模块用rollup打包成npm包，在关联的后台管理系统中功能 npm 包安装后就可以实现，方便日后各个业务模块升级维护。

## 实现原理

全局绑定就好

## 主要做了

如： table 模块插件化

+ 当前后台管理系统的 utils/request.js、router/index.js 传入插件的配置参数
+ 把 src/table 文件夹下的页面迁入 rollup 插件项目
+ 把 src/table 的页面路由写好在 table.js (⚠️注意：import XX from './XX.vue'之后，需要用 XX.install 方法进行Vue的解析)
+ 打包入口：src/index.js 可以在 install 方法进行配置参数的获取，如：动态加载路由、页面请求发出
+ scripts 文件夹下配置 rollup.production.js 打包配置
+ package.json 文件入口 main: dist/index.js 和  "files": ["src","dist"]

## 打包

执行以下命令之后，生成dist/index.js 文件

```js
npm run build

```

## 使用

### 安装

在后端管理系统项目中，安装

```js
npm i vue-component-plugin

```

### 引入

安装完成之后，在后端管理系统项目的入口文件 main.js 引入：

```js
import router from './router' // 全局路由封装
import request from './utils/request' // 全局请求封装
import vueComponentPlugin from 'vue-component-plugin' // 插件引入

Vue.use(vueComponentPlugin, { // 插件配置参数
  $request: request,
  $router: router
})

```
### 项目跑起来

运行后后台管理系统，然后输入就可以访问路由了以下任意路由了

`/dynamic-table`
`/drag-table`
`/inline-edit-table`

## 优点

+ 一个业务功能模块页面能被复制使用，不需要重复开发
+ 可以选择需要的业务功能模块安装，不会一套出现全套安装
+ 十分方便各个业务功能模块页面的迭代开发和更新


## 缺点

后台管理系统模板是给各个业务团队使用的，后台管理系统的这些插件模块，出问题，他们会找你

## 小白快速跑起来

散户可以自己下载 vue-element-template 后台管理系统
安装这个插件，vue-component-pluginye
页面引入插件
把项目跑起来
输入路由地址`http://localhost:9528/#/drag-table`

```js
git clone https://github.com/PanJiaChen/vue-admin-template.git

cd vue-admin-template

npm i

npm i vue-component-plugin

npm dev

```