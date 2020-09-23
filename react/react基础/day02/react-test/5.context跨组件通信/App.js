import React, { Component } from 'react'
// import { render } from 'react-dom';
import Father from './component/father'
import {moneyContext} from './context/index'


// function App() {
//   return (
//     <div>
//       <h3>我是根组件</h3>
//       <Father />
     
//     </div>
//   );
// }
export default  class App extends Component{
  state={
    money:200000
  }
 render(){
   const {money}=this.state
   return (
     <div>
       <h3>我是根组件</h3>
       <moneyContext.Provider value={money}>
         <Father />
       </moneyContext.Provider>
     </div>
   )
 } 
}


