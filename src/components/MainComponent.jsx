import React from 'react'
import { ProductList } from '../templates';
import Styles from './StyleComponents/Main.module.css';
const MainComponent = () => {
  return (
    <div className={ Styles.mainContainer }>
      <h3>記事一覧</h3>
      <ProductList />
    </div>
  )
}

export default MainComponent
