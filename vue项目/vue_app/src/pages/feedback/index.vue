<template>
  <div class="container">
    反馈页面
    导航区域<hr>
    <router-link :to="{
      name: 'one',
      params:{
        id:17
      }
    }" tag='button'>one-1</router-link><br>
    <router-link :to="{
      name: 'one',
      params:{
        id:22
      }
    }" tag='button'>one-2</router-link><br>
    <router-link to='/feedBack/two' tag='button'>two</router-link>
    二级路由（多级路由）<hr>
    user/userInfo<hr>
    路由展示区域<hr>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  // 两个路由共用了一个组件
  
}
</script>
