<template>
  <div class="container" v-swiperight='back' v-swipeleft='forward'>
    <van-empty
      v-if="isEmpty"
      class="custom-image"
      image="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1782226476,2799451349&fm=26&gp=0.jpgg"
      description="您的购物车空空如也"
    />
    <div v-for="item in cars" :key="item.shopId" class="shangpin">
      <van-checkbox v-model="item.checked"></van-checkbox>
      <van-swipe-cell>
        <van-card
          :num="item.num"
          :price="item.price"
          desc="描述信息"
          :title="item.d_title"
          class="goods-card"
          :thumb="item.imgUrl"
        />
        <template #right>
          <van-button
            square
            text="删除"
            type="danger"
            class="delete-button"
            @click="delCars(item.shopId)"
          />
        </template>
      </van-swipe-cell>
    </div>
    <van-submit-bar :price="zongjia" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="flag" @click="flageChange(flag)">全选</van-checkbox>
      <template #tip>
        你的收货地址不支持同城送,
        <span @click="onClickEditAddress">修改地址</span>
      </template>
    </van-submit-bar>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      flag: true,
      // total:0
    }
  },
  computed: {
    ...mapState('carStore', {
      cars: state => state.cars
    }),
    isEmpty() {
      return this.cars.length === 0
    },
    zongjia() {
      let val=0
      this.cars.forEach(item => 
      val+=item.num*item.price*100
      )
      return val
    }
  },
  methods: {
    ...mapActions('carStore', ['getCars', 'delCars','flageChange']),
    onSubmit() {},
    onClickEditAddress() {},
    // changeFlage(){
    //   this.flageChange()
    // } 
  },
  mounted() {
    this.getCars()
  }
}
</script>

<style lang="scss" scoped>
.goods-card {
  margin: 0;
  background-color: white;
}

.delete-button {
  height: 100%;
}
.custom-image {
  height: 500px !important;
}
.shangpin {
  display: flex;
  justify-content: space-between;
  .van-checkbox {
    padding-left: 10px;
    margin-right: 10px;
  }
  .van-swipe-cell {
    flex: 1;
  }
}
</style>
