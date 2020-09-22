<template>
  <!-- 头部和底部是公共的，放在components里面 -->
  <header>
    <van-icon name="arrow-left" @click='getBack' v-if="flag" />
    <h3>{{ title }}</h3>
    <van-icon name="ellipsis" @click='openMask' v-if="flag" />
    <!-- van-overlay遮罩层 -->
    <van-overlay :show="show" @click="openMask">
      <i class='sanjiao'></i>
      <ul>
        <router-link
          tag='li'
          v-for = 'item in navs'
          :key = item.id
          :to= 'item.path'
        >
          <van-icon :name='item.iconName'></van-icon>
          <span>{{item.text}}</span>
        </router-link>
      </ul>
    </van-overlay>
  </header>
</template>
<script>
export default {
  data () {
    return {
      flag: false,
      // title: '你大爷还是你大爷'
      show: false, // 控制遮罩层
      navs: [
        {
          id: 1,
          text: '首页',
          iconName: 'wap-home-o',
          path: '/home'
        },
        {
          id: 2,
          text: '搜索',
          iconName: 'search',
          path: '/search'
        },
        {
          id: 3,
          text: '客服',
          iconName: 'service',
          path: '/service'
        },

        {
          id: 4,
          text: '反馈',
          iconName: 'edit',
          path: '/feedback'
        },
        {
          id: 5,
          text: '我的',
          iconName: 'user-circle-o',
          path: '/user'
        }
      ]
    }
  },
  computed: {
    title () {
      // 该表tab栏文字，要路由配合
      return this.$route.meta.title
    }
  },
  watch: {
    $route () {
      // console.log('路径改变了')
      const { path } = this.$route
      if (path === '/home' || path.indexOf('/detail') !== -1) {
        this.flag = false
      } else {
        this.flag = true
      }
    }
  },
  methods: {
    // 后退一步（返回）
    getBack () {
      this.$router.back()
      // this.$router.go(-1)
      // this.$router.push('/user')跳指定页面
      // this.$router.replace('/user')跳指定页面
    },
    openMask () {
      this.show = !this.show
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'Assets/stylesheets/theme.scss';
header {
  width: 100vw;
  height: 55px;
  background: $themeColor;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-size: 18px;
  position: relative;
  h3 {
    flex: 1;
    text-align: center;
  }
  .van-overlay{
    width: 114px;
    height: 200px;
    border-radius: 10px;
    margin-left: 250px;
    margin-top: 60px;
    position: absolute;
    ul {
      display: flex;
      flex-direction: column;
      // justify-content: space-around;
      align-items: center;
      li {
        display: flex;
        padding: 11px 10px;
        align-items: center;
        span {
          margin-left: 10px;
          font-size: 14px;
          color: white;
        }
      }
    }
    .sanjiao {
      // display: block;
      width: 0px;
      height: 0px;
      border: 9px solid transparent;
      border-bottom: 9px solid rgba(0,0,0,.7);
      position: absolute;
      right: 17px;
      top: -18px;
    }
  }
}
</style>
