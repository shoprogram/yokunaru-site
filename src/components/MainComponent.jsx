import React from 'react'
import { ProductList } from '../templates';
import Styles from './StyleComponents/Main.module.css';
const MainComponent = () => {
  return (
    <div className={ Styles.mainContainer }>
      <h1 className={Styles.title}>サイシンキジ</h1>
      <ProductList />
    </div>
  )
}

export default MainComponent
