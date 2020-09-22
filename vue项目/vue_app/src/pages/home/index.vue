<template>
  <div class="container">
    <div class="swiper-container">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="home-content" v-swiperight="back" v-swipeleft="forward">
      <movie-list />
    </div>
  </div>
</template>

<script>
import MovieList from './MovieList'
export default {
  components: {
    MovieList
  },
  data() {
    return {
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  .home-content {
    flex: 1;
    height: 100%;
    overflow: hidden;
  }
}
.swiper-container {
  width: 100vw;
  height: 240px;
  .van-swipe {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
