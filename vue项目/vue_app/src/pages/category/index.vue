<!--
  items里面的数据cates来自state里面的cates
  cates[active]里面的active是索引，在$route里面有个active下标，就是左侧对应的每个选项的下标
  :main-active-index.sync="active"
-->
<template>
  <div class="container" v-swiperight='back' v-swipeleft='forward'>
    <!-- 页面没有显示出来，显示一个加载中 -->
    <van-loading size="24px" v-if="cates.length == 0">加载中...</van-loading>
    <van-tree-select
      height="100%"
      :items="cates"
      :main-active-index.sync="active"
    >
      <template #content >
        <div class="floor_list">
          <div v-for= "(floor, index) in cates[active].floors" :key = 'index'>
            <h3>{{floor.name}}</h3>
            <ul>
              <!-- 第一种写法 -->
              <!-- 配置好的路由是/list:id所以就必须在:to里面写params带上id的值,query携带其他的参数 -->
              <!-- <router-link
                v-for= "item in floor.list"
                :key=item.api_cid
                tag='li'
                :to="{
                  name: 'list',
                  params: {
                    id: item.api_cid
                  },
                  query: {
                    r: 'class/cysub'
                  }
                }"
              > -->
              <!-- 第二种写法 -->
              <!-- r: 'class/cyajaxsub'和列表的数据保持一致 -->
              <router-link
                v-for= "item in floor.list"
                :key=item.api_cid
                tag='li'
                :to="{
                  path: 'list',
                  query: {
                    cid: item.api_cid,
                    r: 'class/cyajaxsub'
                  }
                }"
              >
                <van-image :src='item.img'/>
                <span>{{item.name}}</span>
              </router-link>
            </ul>
          </div>
        </div>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      active: 0,
      items: [{ text: '分组 1' }, { text: '分组 2' }]
    }
  },
  computed: {
    // car是命名空间
    // 先在store.js文件里面定义好cates数据
    ...mapState('carStore', {
      cates: state => state.cates
      // cates名字可以随便取，习惯取的同名
      // 把分类请求得到的数据赋值给cates
    })
  },
  methods: {
    // 先在store.js文件里面定义好getCates方法
    ...mapActions('carStore', ['getCates'])
    // 什么时候发送数据请求呢？？？
    // 页面一加载完成后再Mounted钩子里面就完成数据请求
  },
  mounted () {
    this.getCates()
  }
}
</script>

<style lang="scss" scoped>
.van-tree-select__nav {
  flex: .6;
}
.floor_list{
  padding: 20px 15px;
  div{
    h3{
      font-size: 16px;
    }
    ul{
      display: flex;
      flex-wrap: wrap;
      margin-top: 10px;
      margin-bottom: 30px;
      // justify-content: space-around;不能这样写
      li{
        width: 25%;
        margin: 0 0 20px 15px;
        text-align: center;
      }
    }
  }
}
</style>
