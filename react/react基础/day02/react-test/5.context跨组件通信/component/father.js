import React, { Component } from 'react'
import Son from './son'
import Sister from './sister'
export default class Father extends Component {
  
  render() {
    return (
      <div>
        <h3>我是爸爸</h3>
      
        <Sister />
        <Son/>
      </div>
    )
  }
}
