<template>
  <div class="container" v-swiperight='back' v-swipeleft='forward'>
    <!-- 列表内容
    通过路由接受传递参数，用$route.query来接受
    {{$route.query}}<br>
    {{$route.query.cid}}
    {{$route.query.r}} -->
    <div class="btn">
      <van-button type="primary" @click='renqiHandler'>人气</van-button>
      <van-button type="info" @click='zuixinHandler'>最新</van-button>
      <van-button type="warning" @click='xiaoliangHandler'>销量</van-button>
      <van-button type="danger" @click='jiageHandler'>价格</van-button>
    </div>
    <!-- 列表布局东西会很多，另建一个页面会页面清晰，整洁 -->
    <ListItem :lists="lists"></ListItem>
  </div>
</template>
<script>
import ListItem from './ListItem.vue'
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      px: 't'
    }
  },
  watch: {
    px () {
      this.getLists({
        r: 'class/cyajaxsub',
        page: 1,
        cid: this.$route.query.cid,
        px: this.px,
        cac_id: ''
      })
    }
  },
  components: {
    ListItem
  },
  computed: {
    ...mapState('carStore', {
      lists: state => state.lists
    })
  },
  methods: {
    ...mapActions('carStore', ['getLists']),
    renqiHandler () {
      this.px = 't'
    },
    zuixinHandler () {
      this.px = 'latest'
    },
    xiaoliangHandler () {
      this.px = 'sell'
    },
    jiageHandler () {
      this.px = 'price_h'
    }
  },
  mounted () {
    // 从路由里面解构出来参数
    const {
      query: { r, cid }
    } = this.$route
    this.getLists({
      r,
      page: 1,
      cid,
      px: this.px,
      cac_id: ''
    })
  }
}
</script>
<style lang="scss" scoped>
.btn {
  display: flex;
  button {
    width: 25%;
  }
}
</style>
