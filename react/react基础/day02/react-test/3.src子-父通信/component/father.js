import React, { Component } from 'react'
import Son from './son'
export default class Father extends Component {
  state = {
    sfq: 500,
  }
  changeSfq = (hongbao) => {
    this.setState({
      sfq: this.state.sfq + hongbao,
    }) 
  }
  render() {
    const { sfq } = this.state
    return (
      <div>
        <h3>我是爸爸</h3>
        <p>老爸的私房钱--{sfq}</p>
        <Son changeSfq={this.changeSfq} />
      </div>
    )
  }
}
