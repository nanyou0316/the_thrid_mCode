<template>
  <div class="container">
    <ul>
      <li v-for="item in lists" :key='item.id'>
        {{item.d_title}}
      </li>
    </ul>
  </div>
</template>
<script>
import {hotReq} from 'Api'
export default {
  data () {
    return {
      lists: []
    }
  },
  async beforeRouteUpdate (to,from,next) {
    // alert('执行了')
    const { params: { id } }=this.$route
    console.log(id)
    const {data:{content}}= await hotReq(id)
    this.lists=content
    next()
  }
}
</script>