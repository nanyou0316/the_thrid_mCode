import React,{Component} from 'react'

export default class Son extends Component{
   render(){
       const {money}=this.props
       return <div>
           我是儿子-{money}
       </div>
   }
}
// export default function Son({money}){
//     return <div>
//         我是儿子-{money}
//     </div>
// }