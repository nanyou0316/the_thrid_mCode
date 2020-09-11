<template>
  <div>
    <p>这是头部</p>
  </div>
</template>

<script>
export default {
  // 这个组件的名字
  name:'Tab'
};
</script>

<style lang="stylus" scoped>
// scoped 样式只在当前组件起效果
// 引入公共样式（和sass的用法差不多）
@import '../assets/style/common.styl'
  p
    width 200px
    height 30px
    background $color
    magin 10px
    line-height 30px
    text-align center

    // sass使用 安装yarn add node-sass sass-loader -D  容易出错 出错了就把node_modelus删除 再重新安装node_modules
</style>
