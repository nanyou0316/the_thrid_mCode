<template>
  <footer>
    <ul>
      <!-- vue路由中提供了一个跳转组件router-link，默认是a标签 -->
      <!-- active-class是内置的，给选中的添加一个类 -->
      <router-link
        tag="li"
        :to="item.path"
        active-class="active"
        v-for="item in tabBars"
        :key="item.id"
      >
        <van-icon :name="item.iconName" />
        <span>{{ item.text }}</span>
      </router-link>
    </ul>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      tabBars: [
        {
          id: 1,
          text: '首页',
          iconName: 'wap-home-o',
          path: '/home'
        },
        {
          id: 2,
          text: '分类',
          iconName: 'apps-o',
          path: '/category'
        },
        {
          id: 3,
          text: '活动',
          iconName: 'cash-back-record',
          path: '/activity'
        },
        {
          id: 4,
          text: '购物车',
          iconName: 'shopping-cart-o',
          path: '/car'
        },
        {
          id: 5,
          text: '我的',
          iconName: 'user-circle-o',
          path: '/user'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
  width: 100vw;
  height: 48px;
  border-top: 1px solid #ccc;
  ul {
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: space-around;
    li {
      display: flex;
      flex-direction: column;
      text-align: center;
      margin-top: 7px;
      &.active {
        color: red;
      }
      span {
        margin-top: 4px;
        font-size: 12px;
      }
      i {
        font-size: 20px;
      }
    }
  }
}
</style>
