<template>
  <div>
    数据请求
    <button @click="getReq" class='btn'>按钮</button>
    <hr>
    <p>我是app内的内容</p>
    <p>图片的使用</p>
    assets里面的图片<br />
    <img src="./assets/image/3.png" alt="" />
    <img src="./assets/image/2.webp" alt="" /><br />
    public里面的图片<br />
    <!-- public里面的图片直接写图片目录 不用带前面的路径 -->
    <img src="/img/2.webp" alt="" /><br />
    背景图<br />
    <p class="bg"></p>

    <Tab></Tab>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <!-- 使用日历 -->
    <van-cell title="选择单个日期" :value="date" @click="show = true" />
<van-calendar v-model="show" @confirm="onConfirm" />
  </div>
</template>
<script>
//后缀名可以省略
//引入组件
import Tab from "comp/Tab";//用别名可以使得路径变得更加简洁
export default {
  //给当前这个组件起个名字
  name: "App",
  //必须注册才能使用
  components: {
    Tab,
  },
  data() {  // 配置日历的数据
    return {
      date: '',
      show: false,
    };
  },
  methods: {
     formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
    //上面是日历组件的配置
    getReq(){
      // this.$http.get('https://m.maoyan.com/ajax/movieOnInfoList',{
        //1.使用反向代理要使用我们当前的域名，端口，协议
        //1.有统一标识符
      // this.$http.get('/ajax/movieOnInfoList',{
      //   params:{
      //     token: '',
      //   optimus_uuid: '0DAC7900F1D011EA9E5F015577E95499E2880A5D0CF84CBAB7D8BAA69ECBDF44',
      //   optimus_risk_level: 71,
      //   optimus_code: 10
      //   }
      // }).then(res=>{
      //   console.log(res)
      // }).catch(error=>{
      //   if(error) throw error
      // }
      //2.没有统一标识符
       this.$http.get('/api/ajax/movieOnInfoList',{
        params:{
          token: '',
        optimus_uuid: '0DAC7900F1D011EA9E5F015577E95499E2880A5D0CF84CBAB7D8BAA69ECBDF44',
        optimus_risk_level: 71,
        optimus_code: 10
        }
      }).then(res=>{
        console.log(res)
      }).catch(error=>{
        if(error) throw error
      })
    }
  },
};
</script>
<style lang="stylus" scoped>
//使用stylus语法在路径前面要加个~   sass不用
  @import '~assets/style/common.styl'
  .btn
    background $color1
  .bg
    width 400px
    height 300px
    //背景图最好用public或者网络图片
    background url('./assets/image/2.webp')
    // background url('/img/2.webp')
    // background url('https://t8.baidu.com/it/u=2247852322,986532796&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1600170250&t=0dda9300e9906793cde48ec61b8cb524')
</style>
