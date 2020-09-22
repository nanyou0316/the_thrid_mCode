
<template>
  <div class="app">
    <Tab />
    <!-- 路由展示区域，内置组件router-view -->
    <!-- keep-alive缓存页面 -->
    <keep-alive>
      <router-view>
      </router-view>
    </keep-alive>
    <TabBar v-if="tab_bar_flag" />
  </div>
</template>

<script>
import Tab from 'Comp/Tab' // 头部
// import Home from 'Pages/home' // 中间内容
import TabBar from 'Comp/TabBar' // 底部

export default {
  name: 'App',
  data () {
    return {
      tab_bar_flag: true
    }
  },
  components: {
    Tab,
    TabBar
    // Home
  },
  // 底部栏的切换
  watch: {
    $route () {
      const { path } = this.$route
      const arr = ['/login', '/register', '/detail', '/list', '/pay']
      let f = true
      arr.map(item => {
        if (path.indexOf(item) !== -1) {
          f = false
          return f
        }
      })
      if (f) {
        this.tab_bar_flag = true
      } else {
        this.tab_bar_flag = false
      }
    }
  }
}
</script>

<style lang="scss">
// 引入全局样式，不用写scoped
  @import 'Assets/stylesheets/reset.scss'; // 引入取消系统的默认样式文件
  .app {
  display: flex;
  flex-direction: column;
}
.van-swipe-cell__wrapper{
  display: flex
}
</style>
