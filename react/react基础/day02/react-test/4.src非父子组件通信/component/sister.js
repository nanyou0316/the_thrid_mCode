import React,{Component} from 'react'
export default class Sister extends Component{
    render(){
        const {da}=this.props
        return <div>
            <h3>我是姐姐</h3>
            <button onClick={da}>揍弟弟</button>
        </div>
    }
} 