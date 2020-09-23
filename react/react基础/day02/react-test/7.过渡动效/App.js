import React, { Component } from 'react'
import {CSSTransition} from 'react-transition-group'
export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      flag:true
    }
  }
  changeFlag=()=>{
    this.setState({
      flag:!this.state.flag
    })
  }
  render() {
    const {flag}=this.state
    return (
      <div
      style={{
        
      }}
      >
        <h3>hello react</h3>
        <button onClick={this.changeFlag}>动画切换</button>
        <CSSTransition
          in={flag}
          timeout={1500}
          classNames={{
            enter: 'animate__animated',
            enterActive: 'animate__slideInLeft',
            exit: 'animate__animated',
            exitActive: 'animate__slideOutRight',
          }}
          unmountOnExit
        >
          <p
            style={{
              background: 'red',
              height: '100px',
            }}
          ></p>
        </CSSTransition>
      </div>
    )
  }
}
