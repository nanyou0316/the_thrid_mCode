import React, { Component } from 'react'
export default class Son extends Component {
  state = {
    flag: false,
    pic:
      'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1600779151&di=0731d2d994cff3751005c4e367fa6ad8&src=http://5b0988e595225.cdn.sohucs.com/images/20180627/d8d339cf958f4be692213043a84dc09a.jpeg',
  }
  changeFlag = () => {
    this.setState({
      flag: !this.state.flag,
    })
  }
  render() {
    const { pic, flag } = this.state
    return (
      <div>
        <h3>我是儿子</h3>
        {flag && <img src={pic} alt='' />}
      </div>
    )
  }
}
