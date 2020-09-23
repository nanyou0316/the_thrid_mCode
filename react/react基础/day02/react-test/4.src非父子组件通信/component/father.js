import React, { Component } from 'react'
import Son from './son'
import Sister from './sister'
export default class Father extends Component {
  da=()=>{
    // this.refs.son.changeFlag()
    this.son.changeFlag()
  }
  render() {
    return (
      <div>
        <h3>我是爸爸</h3>
        {/* <Son ref="son" /> */}
        {/* 
        上面的情况已经过时了，用下面的新方法
        el是Son组件，this指向Father组件
        给Father组件绑定了一个属性指向Son组件
        */}
        <Sister da={this.da} />
        <Son ref={(el) => (this.son = el)} />
      </div>
    )
  }
}
