<template>
  <div class="tab-content">
    <div class="movie-list">
      <div v-for="item in movies" :key="item.id">
        <van-card
          :num="item.sc"
          price="2.00"
          :desc="item.showInfo"
          :title="item.nm"
          :thumb="item.img | imgFilter"
          @click="goFeedBack"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
// yarn add @better-scroll/core安装滚动插件
import BScroll from '@better-scroll/core' // 引入滚动插件
import Pullup from '@better-scroll/pull-up' // 引入上拉加载
import _ from 'lodash'
import { Toast } from 'vant'
BScroll.use(Pullup)
export default {
  computed: {
    ...mapState('homeStore', {
      movies: state => state.movies,
      movieIds: state => state.movieIds
    })
  },
  methods: {
    ...mapActions('homeStore', ['getInitMovies', 'getMoreMovies']),
    goFeedBack() {
      this.$router.push('/feedback')
    }
  },
  mounted() {
    this.getInitMovies()
    // 在这里使用滚动插件
    const wrapper = document.querySelector('.tab-content')

    this.bscroll = new BScroll(wrapper, {
      click: true, // 点击跳转
      pullUpLoad: {
        threshold: 90 // 距离底部还有90的时候再加载
      }
    })
    let count = 0
    this.bscroll.on('pullingUp', () => {
      console.log('上拉')
      console.log(_.chunk(this.movieIds.slice(12), 10))
      const ids = _.chunk(this.movieIds.slice(12), 10)
      // console.log(ids[count].join(','))
      // yarn add lodash
      // 利用lodash分组库
      if (count < ids.length) {
        this.getMoreMovies(ids[count].join(','))
        this.bscroll.finishPullUp()
        this.bscroll.refresh() // 重新计算长度
      }
      if (count >= ids.length) {
        Toast({
          message: '狗子，没有数据了',
          position: 'bottom',
        });
      }
      this.bscroll.finishPullUp()
      this.bscroll.refresh() 
      count++
    })
  }
}
</script>

<style lang="scss" scoped>
@import 'Assets/stylesheets/movie.scss';
.box {
  width: 100%;
}

.tab-content {
  height: 100%;
  overflow: hidden;
}
</style>
