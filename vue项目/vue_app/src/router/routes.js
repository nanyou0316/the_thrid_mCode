// 路由懒加载wabpack代码分割功能+vue异步组件
const Home = () => import(/* webpackChunkName:'groud-foo' */ 'Pages/home') // 省略了index.vue
const Category = () =>
  import(/* webpackChunkName:'groud-foo' */ 'Pages/category')
const List = () => import(/* webpackChunkName:'groud-foo' */ 'Pages/list')
const Detail = () => import(/* webpackChunkName:'groud-foo' */ 'Pages/detail')
const Car = () => import(/* webpackChunkName:'groud-foo' */ 'Pages/car')
const User = () => import(/* webpackChunkName:'groud-foo' */ 'Pages/user')
const Login = () =>
  import(/* webpackChunkName:'groud-foo' */ 'Pages/user/Login')
const Register = () =>
  import(/* webpackChunkName:'groud-foo' */ 'Pages/user/Register')
const Activity = () => import(/* webpackChunkName:'groud-foo' */ 'Pages/activity')
const Pay = () => import(/* webpackChunkName:'groud-foo' */ 'Pages/pay')
const NotFound = () => import(/* webpackChunkName:'groud-foo' */ 'Pages/404')
const feedBack = () => import(/* webpackChunkName:'groud-foo' */ 'Pages/feedback')// 反馈页面
const One = () => import(/* webpackChunkName:'groud-foo' */ 'Pages/feedback/one')// 反馈页面下的one页面
const Two = () => import(/* webpackChunkName:'groud-foo' */ 'Pages/feedback/two')// 反馈页面下的two页面

export default [
  {
    path: '/',
    redirect: '/home' // 重定向，默认是home页面
  },
  {
    path: '/home',
    component: Home, // 一个路由对应一个组件
    meta: {
      title: '首页'
    }
  },
  {
    path: '/category', // 分类页面
    component: Category,
    meta: {
      title: '分类'
    }
  },
  {
    // 路由传参------路由接参用$route.query.xxx
    // path: '/list/:id',列表页面，:to='{name:list,params:{id:xx},连接字符串加上query:{xxx:xxx}}'
    // 如果是path:'/list',跳转里面里面就是这样写
    // :to='{path:'list',query:{xxx:xxx,xx:xx...}}'
    path: '/list',
    component: List, // 一个路由对应一个组件
    name: 'list', // path:'/list/:id',path里面接：id就必须带上name属性（这个叫命名路由）
    meta: {
      title: '列表页面'
    }
  },
  {
    path: '/detail/:id', // 详情页面
    component: Detail, // 一个路由对应一个组件
    name: 'detail',
    meta: {
      title: '详情页'
    }
  },
  {
    path: '/car', // 购物车页面
    component: Car, // 一个路由对应一个组件
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/user', // 用户页面
    component: User, // 一个路由对应一个组件
    meta: {
      title: '用户信息'
    }
  },
  {
    path: '/login', // 登入页面
    component: Login, // 一个路由对应一个组件
    meta: {
      title: '登入'
    }
  },
  {
    path: '/register', // 注册页面
    component: Register, // 一个路由对应一个组件
    meta: {
      title: '注册'
    }
  },
  {
    path: '/activity', // 活动页面
    component: Activity, // 一个路由对应一个组件
    meta: {
      title: '9.9中秋大礼包'
    }
  },
  // 支付界面
  {
    path: '/pay',
    component: Pay,
    meta: {
      title: '立即支付'
    }
  },
  // 反馈页面
  {
    path: '/feedback',
    component: feedBack,
    // 子路由
    children: [
      {
        path:'one/:id',// 子路由不写斜杆
        component: One,
        name:'one',
        meta: {
          title: '反馈页面'
        }
      },
      {
        path: 'two',
        component: Two,
        meta: {
          title: '反馈页面'
        }
      }
    ],
    meta: {
      title: '反馈页面'
    }
  },
  // 错误路由配置，放在路由表的最下面
  {
    path: '*', // 404错误页面
    component: NotFound, // 一个路由对应一个组件
    meta: {
      title: '页面未找到'
    }
  }
]
