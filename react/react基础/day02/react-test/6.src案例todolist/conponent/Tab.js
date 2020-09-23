import React,{Component} from 'react'
export default class Tab extends Component{
    constructor(props){
      super(props)
      this.state={
          value:''
      }
    }
    changeVal=(e)=>{
        this.setState({
            value:e.target.value
        })
    }
    addTask=(e)=>{
        console.log('e.type',e.type)
        const {addTodos}=this.props
        if(e.type === 'keyup'&&e.keyCode===13) {
            addTodos(this.state.value)
        this.setState({
            value:''
        })
        }
        if(e.type==='click'){
          addTodos(this.state.value)
          this.setState({
            value: '',
          })
        }
         
        
    }
        render(){
        const {value}=this.state
        return <div>
            <input onKeyUp={this.addTask} type='text' value={value} onChange={this.changeVal} placeholder='请输入任务'></input >
            <button onClick={this.addTask}>添加任务</button>
        </div>
    }
}