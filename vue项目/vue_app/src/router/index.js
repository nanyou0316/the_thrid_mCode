// 路由配置
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
Vue.use(VueRouter)

const router = new VueRouter({
  // 路由模式
  mode: 'history', // 反向代理的标识符切记不要出现在你的路由路径中
  routes// 路由表一般放一个文件里面
})

export default router
