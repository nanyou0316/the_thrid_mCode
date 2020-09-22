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
      <van-uploader v-model="fileList" :after-read="afterRead" :max-count="1" />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="phone"
        name="phone"
        label="手机号码"
        placeholder="手机号码"
        :rules="[{ required: true, message: '请填写手机号码' },{ pattern: /^1[3456789]\d{9}$/, message: '手机号码格式错误！'}]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          注册
        </van-button>
      </div>
    </van-form>
    <router-link to="/login" tag="button">已经登入过</router-link>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  data() {
    return {
      username: '',
      password: '',
      phone: '',
      fileList:[]
    }
  },
  methods: {
    ...mapActions('userStore',['getPic','register']),
    afterRead (file) {//文件读取完成后的回调函数
      this.getPic(file.file)
      console.log(file.file);
    },
    onSubmit(values) {
      // console.log('submit', values)
      this.register(values)
    }
  }
}
</script>
