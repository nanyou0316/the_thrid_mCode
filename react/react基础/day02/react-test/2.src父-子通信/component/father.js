import React, { Component } from 'react'
import Son from './son'
export default class Father extends Component {
  state={
      money:300
  }  
  render() {
      const {money}=this.state
    return <div>
        <h3>我是爸爸</h3>
        <Son money={money}/>
        </div>
  }
}
