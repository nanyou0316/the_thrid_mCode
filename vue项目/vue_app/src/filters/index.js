
// import Vue from 'vue'
// 定义一个日期格式化的函数
export default function filterhandler (Vue) {
  Vue.filter('dataFilter', function (val, type) {
    const data = new Date(val)
    return data.getFullYear() + type + (data.getMonth() + 1) + type + data.getDate()
  })
  Vue.filter('imgFilter',function(val){
    return val.replace('w.h','128.180')
  })
}
