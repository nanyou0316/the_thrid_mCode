import React, { Component } from 'react'
import styles from './List.module.less'
export default class List extends Component {
  // 渲染列表数据
  renderList = () => {
    const { Todos, delTodos, showMask, changeFlag } = this.props
    return Todos.map((item,index) => (
      <li key={item.id}>
        <p>
          {item.tast}
          <button onClick={()=>{delTodos(index)}}>删除</button>
          <button onClick={()=>{showMask(item.tast,index)}}>修改</button>
        </p>
        <label style={{background:item.flag?'green':'red'}} className={styles.color} onClick={()=>{changeFlag(index)}}></label>{item.flag?'已完成':'未完成'}
      </li>
    ))
  }
  render() {
    return (
      <div>
        <ul>{this.renderList()}</ul>
      </div>
    )
  }
}
