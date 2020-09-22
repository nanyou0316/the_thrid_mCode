<template>
  <div class="container">
     <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />     
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />     
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          登入
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
import {getCookie} from 'Utils/cookie.js'

export default {
  data(){
    return{
      username:getCookie('username'),
      password:''
    }
  },
  methods: {
    ...mapActions('userStore',['login']),
    onSubmit(values){
      this.login(values)
    }
  },
}
</script>
