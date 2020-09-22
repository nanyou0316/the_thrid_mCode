<template>
  <div class="container" v-swiperight='back' v-swipeleft='forward'>
    <!-- 已经登入 -->
    <div v-if="userInfo.username">
      <div>
        <img :src="userInfo.pic" alt="">
        {{userInfo.username}}
        <van-button type="primary" @click="loginOut">退出登入</van-button>
      </div>
    </div>
    <!-- 未登入 -->
    <div v-else>
      <router-link tag="button" to="/register">注册</router-link>
      <router-link tag="button" to="/login">登入</router-link>
    </div>
  </div>
</template>

<script>
import {getCookie, removeCookie} from 'Utils/cookie.js'
export default {
  computed: {
    userInfo () {
      return {
        pic: getCookie('avatar'),
        username: getCookie('username')
      }
    }
  },
  methods: {
    loginOut(){
      removeCookie('username')
      removeCookie('avatar')
      removeCookie('userId')
      removeCookie('token')
      this.$router.push('/login')
    }
  },
}
</script>
<style lang='scss' scoped>
  img{
    width:100px;
    height:100px
  }
</style>
