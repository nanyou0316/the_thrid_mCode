import React, { Component } from 'react'


import One from './components/One'
import Two from './components/Two'
import Three from './components/Three'


export default class App extends Component {
  render() {
    return (
      <div>
        <h3>hello react</h3>
        <One/>
        <Two/>
        <Three/>
      </div>
    )
  }
}
