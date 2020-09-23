import React, { Component } from 'react'
export default class Son extends Component {
  state={
      money:888
  }
  
  give=()=>{
      const {changeSfq}=this.props
    const {money}=this.state
    changeSfq(money)
    
  }
  render() {
    return (
      <div>
        <h3>我是儿子</h3>
        <button onClick={this.give}>给老爸红包</button>
      </div>
    )
  }
}
