<template>
  <div class="container">
    <van-swipe-cell>
      <van-card
        :num="shopInfo.num"
        :price="shopInfo.jiage"
        :desc="shopInfo.miaoshu"
        :title="shopInfo.d_title"
        class="goods-card"
        :thumb="shopInfo.pic"
      />
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" />
      </template>
    </van-swipe-cell>
    <van-submit-bar
      :price="totalPrice"
      button-text="提交订单"
      @submit="onSubmit"
    >
      <van-checkbox v-model="checked" @click="changChecked">全选</van-checkbox>
      <template #tip>
        你的收货地址不支持同城送,
        <span @click="onClickEditAddress">修改地址</span>
      </template>
    </van-submit-bar>
  </div>
</template>

<script>
import { Dialog, Notify } from 'vant'
export default {
  name: 'Pay',
  data() {
    return {
      checked: false
    }
  },
  computed: {
    shopInfo() {
      return this.$route.query
    },
    totalPrice() {
      const {
        query: { jiage, num }
      } = this.$route
      return jiage * num * 100
    }
  },
  methods: {
    onClickEditAddress() {},
    changChecked() {
      // this.checked = !this.checked
      console.log(this.checked)
    },
    onSubmit() {
      if (this.checked) {
        // 成功通知
        Notify({ type: 'success', message: '支付成功', duration: 500, });
      } else {
        Dialog.alert({
          message: '您还没有勾选确认按钮',          
        }).then(() => {
         this.checked = true
        })
      }
    }
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
</style>
