<template>
  <div>
    <h3>用户页面</h3>
    <p>{{username}}</p>
    <p>{{phone}}</p>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    // username () {
    //   return this.$store.state.user.username
    // },
    // phone () {
    //   return this.$store.state.user.phone
    // }
    ...mapState('user',  {
      username: state => state.username,
      phone: state => state.phone
    })
  },
  methods: {
    ...mapActions('user',['getUserInfo'])
  },
  // 页面加载完成就发请求
  mounted () {
    // this.$store.dispatch('getUserInfo')
    this.getUserInfo()
  }
}
</script>
