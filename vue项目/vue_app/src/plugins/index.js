// 创建自定义插件
import filterHandler from '../filters'
import directiveHandler from '../directive'
const myPlugin = {
  install (Vue) {
    // 过滤器处理
    filterHandler(Vue)
    // 自定义指令
    directiveHandler(Vue)
  }
}
export default myPlugin
