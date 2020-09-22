<template>
  <div class="container" v-swiperight='back' v-swipeleft='forward'>
    <!-- 渲染网页 -->
    <div v-html="details"></div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" dot />
      <van-goods-action-icon icon="cart-o" @click="goCar" text="购物车" badge="15" />
      <van-goods-action-icon icon="shop-o" text="店铺" badge="4" />
      <van-goods-action-button type="warning" @click="addCar" text="加入购物车" />
      <van-goods-action-button type="danger" @click="buyNow" text="立即购买" />
      <!-- 购买商品sku的组件 -->
      <van-sku
        v-model="show"
        :sku="sku"
        :goods="goods"
        :goods-id="goodsId"
        :quota="quota"
        :quota-used="quotaUsed"
        :hide-stock="sku.hide_stock"
        @buy-clicked="OnBuyNow"
        @add-cart="onAddCar"
        @stepper-change="changeNum"
      />
      <!--
        quota限购数
        quota-used已经购买的数量
        hide-stock是否显示库存量
        @stepper-change点击购买时触发的事件
      -->
    </van-goods-action>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { getCookie } from 'Utils/cookie.js'
import { Toast } from 'vant'
export default {
  name: 'detail',
  data () {
    return {
      // 购买商品sku的组件
      // quota限购数
      // quota-used已经购买的数量
      // hide-stock是否显示库存量
      quota: 100,
      'quota-used': '1w+',
      num: 1, // 最少购买数量
      show: false,
      type: 0, // 重复添加就不在发请求 
      sku: {
        // 数据结构见下方文档
      },
      goods: {
        // 默认商品 sku 缩略图
        picture: 'https://img.yzcdn.cn/1.jpg'
      }
    }
  },
  computed: {
    ...mapState('carStore', {
      details: state => state.details,
      addCarResult: state => state.addCarResult
    })
  },
  methods: {
    ...mapActions('carStore', ['getDetails', 'getAddCarResult']),
    openShow () {
      this.show = true
    },
    // 跳转到购物车
    goCar () {
      this.$router.push('/car')
    },
    // 外面加入购物车
    addCar () {
      this.openShow()
    },
    // 外面立即购买
    buyNow () {
      this.openShow()
    },
    // 里面加入购物车
    onAddCar () {
      // alert('1')
      const token = getCookie('token')
      const { query: { goodsid, pic, jiage, yuanjia, xiaoliang, comment, d_title } } = this.$route
      if (this.type !== 1) {       
        this.getAddCarResult({
          imgUrl: pic,
          d_title,
          price: jiage,
          oringinal: yuanjia,
          sales: xiaoliang,
          comment,
          num: this.num,
          token,
          shopId: goodsid
        })
      }
      const { status, msg } = this.addCarResult
      if (status === 1) {
        // alert('111')
        Toast.success(msg)
      } else {
        // alert('商品已添加，请勿重复添加')
        Toast.fail(msg)
        this.type = 1
      }
    },
    // 里面立即购买
    OnBuyNow () {
      // alert('2')
      // 将详情页的数据传到支付界面
      // 第二种传参形式，通过编程时导航
      this.$router.push({
        path: '/pay',
        query: {
          ...this.$route.query,
          num: this.num// 数量
        }
      })
    },
    // 购买数量的变化
    changeNum (value) {
      console.log(value)
      this.num = value
    }
  },
  mounted () {
    const {
      params: { id },
      query: { r, pic, jiage }
    } = this.$route// 我们在上个页面把数据都放在this.$route里面了
    this.goods.picture = pic
    this.getDetails({ // 参数通过对象的形式传递
      r,
      id
    })
    // 购买商品sku的组件
    this.sku = {
      // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
      // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
      tree: [
        {
          k: '颜色', // skuKeyName：规格类目名称
          k_s: 's1', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          v: [
            {
              id: '1', // skuValueId：规格值 id
              name: '红色', // skuValueName：规格值名称
              imgUrl: pic, // 规格类目图片，只有第一个规格类目可以定义图片
              previewImgUrl: pic // 用于预览显示的规格类目图片
            },
            {
              id: '2',
              name: '蓝色',
              imgUrl: pic,
              previewImgUrl: pic
            }
          ],
          largeImageMode: true //  是否展示大图模式
        }
      ],
      // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
      list: [
        {
          id: 2259, // skuId
          s1: '1', // 规格类目 k_s 为 s1 的对应规格值 id
          s2: '1', // 规格类目 k_s 为 s2 的对应规格值 id
          price: 100, // 价格（单位分）
          stock_num: 110 // 当前 sku 组合对应的库存
        },
        {
          id: 2259, // skuId
          s1: '2', // 规格类目 k_s 为 s1 的对应规格值 id
          s2: '1', // 规格类目 k_s 为 s2 的对应规格值 id
          price: 100, // 价格（单位分）
          stock_num: 110 // 当前 sku 组合对应的库存
        }
      ],
      price: jiage, // 默认价格（单位元）
      stock_num: 227, // 商品总库存
      collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
      none_sku: false, // 是否无规格商品
      hide_stock: true // 是否隐藏剩余库存，默认是false
    }
  }
}
</script>

<style lang="scss">
.van-goods-action {
  // position: absolute;
  z-index: 99;
}
.van-info {
  // min-width: 27px !important;
  white-space: nowrap;
}
</style>
