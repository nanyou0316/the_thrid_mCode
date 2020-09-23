import React, { Component } from 'react'
import {moneyContext} from '../context/index'
export default class Son extends Component {
    //作者是类组件的用法
  static contextType=moneyContext
  render() {
    
    return (
      <div>
        <h3>我是儿子</h3>
        {this.context}
      </div>
    )
  }
}
