import React, { Component } from 'react'
//@babel/plugin-proposal-decorators支持装饰器要安装这个
// 高阶组件，参数是一个组件，返回值也是一个组件
export function HighComp(Comp) {
  return class _ extends Component {
    // 复用的逻辑
    handler = () => {
      console.log(11)
    }
    render() {
      return <Comp handler={this.handler} />
    }
  }
}
