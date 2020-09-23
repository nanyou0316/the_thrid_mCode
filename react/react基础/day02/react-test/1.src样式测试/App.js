import React from 'react';
// 引入scss文件
import './App.scss';
// 引入less文件 带module的是局部样式
import styles from './App.module.less'
// 引入scss局部样式文件 带module的是局部样式
import scssStyles from './App.module.scss'

function App() {
  return (
    <div className="App">
      hello react
      <h3 className='box'>我是菜鸟</h3>
      <p className='container'></p>
      <p className={styles.inner}></p>
      <p className={scssStyles.scsstest}></p>
    </div>
  );
}

export default App;
