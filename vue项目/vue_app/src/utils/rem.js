// rem等比适配配置文件
// 基准大小
const baseSize = 16
// 设置 rem 函数
function setRemv () {
  // 当前页面宽度相对于 1920宽的缩放比例，可根据自己需要修改。
  //! 如果我没有设计稿，我就用375
  //! 如果我有设计稿，一定是750
  const scale = document.documentElement.clientWidth / 375// 有设计稿一定是750
  // 设置页面根节点字体大小（“Math.min(scale, 2)” 指最高放大比例为2，可根据实际业务需求调整）
  document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
}
// 初始化
setRemv()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRemv()
}
