import React,{Component} from 'react'
import './index.less'
import Tab from './conponent/Tab'
import List from './conponent/List'
import Mask from './conponent/Mask'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Todos: [
        {
          id: 1,
          tast: '吃饭',
          flag: false,
        },
      ],
      MaskFlag: false,
      oldVal:'',
      activeIndex:0
    }
  }
  //添加任务
  addTodos = (val) => {
    this.setState(({ Todos }) => {
      Todos.push({
        id: Todos.length + 1,
        tast: val,
        flag: false,
      })
      return { Todos }
    })
  }
  // 删除任务
  delTodos = (index) => {
    this.setState(({ Todos }) => {
      Todos.splice(index, 1)
      return { Todos }
    },()=>{
        console.log(this.state.Todos) 
        this.setState(({Todos})=>{
          Todos.map((item,index)=>
            item.id=index+1
           
          )
          return {Todos}
        }) 
      }
      
    )
  }
  // 显示遮罩层
  showMask = (task,index) => {
    this.setState({
      MaskFlag: !this.state.MaskFlag,
      oldVal: task,
      activeIndex:index
    })
  }
  // 隐藏遮罩层
  hideMask=(e)=>{
    console.log('e',e.target.detaset);
    if(e.target.dataset.type==='mask'){
      this.setState({
        MaskFlag: !this.state.MaskFlag,
      })
    }  
  }
  // 修改任务
  changeTask=(newVal)=>{
    this.setState(({ Todos, activeIndex }) => {
      Todos[activeIndex].tast = newVal
      return { Todos }
    })
  }
  //是否已完成
  changeFlag=(index)=>{
    this.setState(({Todos})=>{
      Todos[index].flag = !Todos[index].flag
      return { Todos }
    })   
  }
  render() {
    const { Todos, MaskFlag, oldVal } = this.state
    return (
      <div>
        hello react
        <Tab addTodos={this.addTodos} />
        <List
          Todos={Todos}
          delTodos={this.delTodos}
          showMask={this.showMask}
          changeFlag={this.changeFlag}
        />
        {MaskFlag && (
          <Mask
            oldVal={oldVal}
            hideMask={this.hideMask}
            changeTask={this.changeTask}
          />
        )}
      </div>
    )
  }
}

