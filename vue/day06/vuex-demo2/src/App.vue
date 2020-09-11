<template>
  <div>
    <!-- <button @click='add'>+</button> -->
    <button @click='increment'>+</button>
    <p class="num">{{n}}</p>
    <!-- <button @click='jian'>-</button> -->
    <button @click='decrement'>-</button>
    <User></User>
  </div>
</template>
<script>
// 把pages->user->index.vue组件引入进来
import User from './pages/user/index.vue'
import {mapState, mapActions} from 'vuex'
export default {
  components: {
    User
  },
  computed: {
    // 第一种写法
    // n () {
    //   return this.$store.state.count.n
    // }
    // 第二种写法
    ...mapState('count', {
      n: state => state.n
    })
  },
  methods: {
    // add () {
    //   this.$store.dispatch('increment')
    // },
    // jian () {
    //   this.$store.dispatch('decrement')
    // }
    ...mapActions('count', ['increment', 'decrement'])
  }
}
</script>
<style lang="scss" scoped>
  .num {
    display: inline;
    background: red;
    padding: 0 20px;
  }
</style>
