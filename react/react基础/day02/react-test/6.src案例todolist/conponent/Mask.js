import React,{Component} from 'react'
import styles from '../Mask.module.less'
export default class Mask extends Component{
  constructor(props){
    super(props)
    this.state={
      val:this.props.oldVal
    }
  }
  changeVal=(e)=>{
    this.setState({
      val:e.target.value
    })
  }
  confirm=(e)=>{
    const { hideMask, changeTask } = this.props
    changeTask(this.state.val)
    hideMask(e)
  }
  render(){
    const {hideMask}=this.props
      return (
        <div>
          <div data-type="mask" className={styles.Mask} onClick={hideMask}>
            <div className={styles.box}>
              <input type="text" value={this.state.val} onChange={this.changeVal} ></input>
              <div className={styles.btn}>
                <button data-type="mask" onClick={this.confirm}>
                  确定
                </button>
                <button data-type="mask" onClick={hideMask}>
                  取消
                </button>
              </div>
            </div>
          </div>
        </div>
      )
  }
}