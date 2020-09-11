<template>
  <div>
    <div class="row">
      <label for="">用户名</label>
      <input type="text" v-model="username" />
    </div>
    <div class="row">
      <label for="">密码</label>
      <input type="password" v-model="password" />
    </div>
    <div class="row">
      <button @click="getLogin">登入</button>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    ...mapState('userStore', {
      loginData: state => state.loginData
    })
  },
  methods: {
    ...mapActions('userStore', ['login']), // action里面定义的方法
    getLogin () {
      this.login({
        username: this.username,
        password: this.$md5(this.password)
      })
    }
  }
}
</script>
