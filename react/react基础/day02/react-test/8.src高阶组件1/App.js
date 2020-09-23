import React, { Component } from 'react'

import { HighComp } from './hoc/index'
import One from './components/One'
import Two from './components/Two'
import Three from './components/Three'
const HocOne= HighComp(One)
const HocTwo= HighComp(Two)
const HocThree= HighComp(Three)

export default class App extends Component {
  render() {
    return (
      <div>
        <h3>hello react</h3>
        <HocOne/>
        <HocTwo/>
        <HocThree/>
      </div>
    )
  }
}
