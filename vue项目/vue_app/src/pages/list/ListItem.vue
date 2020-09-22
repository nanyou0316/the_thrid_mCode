
<template>
  <div class="container">
    <ul>
      <!--...item通过query把所有页面所有数据传过去 -->
      <router-link
        v-for="item in lists"
        :key="item.id"
        tag="li"
        :to="{
          name: 'detail',
          params: {
            id: item.id
          },
          query: {
            r: 'p/d',
            ...item
          }
        }"
      >
        <van-image :src="item.pic" />
        <h3>{{ item.d_title }}</h3>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  // 接受:lists单项数据绑定的数据
  props: ['lists']
}
</script>

<style lang="scss" scoped>
.van-image {
  width: 150px !important;
  height: 150px !important;
}
</style>
