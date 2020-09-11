<template>
  <div>
    用户输入数字：<input type="number" v-model="val">
    <button @click="add">+</button>
    <p class="num">{{n}}</p>
    <button @click="jian">-</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      val: 1
    }
  },
  computed: {
    n () {
      return this.$store.state.count
    }
  },
  methods: {
    add () {
      // 调用mutations里面的方法,不进过actions
      this.$store.commit('increment', this.val)
    },
    jian () {
      this.$store.commit('decrement', this.val)
    }
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
