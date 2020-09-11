// 自定义指令
function touch (el, type, handler) {
  const hammer = new Hammer(el)
  hammer.on(type, handler)
}
export default function directiveHandler (Vue) {
  // 主要目的是移动端事件库hammer.js
  Vue.directive('tap', {
    bind (el, binding) {
      touch(el, binding.name, binding.value)
    }
  })
  // 长按
  Vue.directive('press', {
    bind (el, binding) {
      touch(el, binding.name, binding.value)
    }
  })
  // 平移
  Vue.directive('pan', {
    bind (el, binding) {
      touch(el, binding.name, binding.value)
    }
  })
  // 旋转
  Vue.directive('rotate', {
    bind (el, binding) {
      touch(el, binding.name, binding.value)
    }
  })
  // 缩放
  Vue.directive('pinch', {
    bind (el, binding) {
      touch(el, binding.name, binding.value)
    }
  })
  // 左滑
  Vue.directive('swipeleft', {
    bind (el, binding) {
      touch(el, binding.name, binding.value)
    }
  })
  // 右滑
  Vue.directive('swiperight', {
    bind (el, binding) {
      touch(el, binding.name, binding.value)
    }
  })
  // 右滑
  Vue.directive('swiperight', {
    bind (el, binding) {
      touch(el, binding.name, binding.value)
    }
  })
  // 上滑
  Vue.directive('swiperup', {
    bind (el, binding) {
      touch(el, binding.name, binding.value)
    }
  })
  // 下滑
  Vue.directive('swiperdown', {
    bind (el, binding) {
      touch(el, binding.name, binding.value)
    }
  })
}
