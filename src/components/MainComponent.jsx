import React from 'react'
import { ProductList } from '../templates';
import Styles from './StyleComponents/Main.module.css';
const MainComponent = () => {
  return (
    <div className={ Styles.mainContainer }>
      {/* Swiper */}
      <h1 className={Styles.title}>サイシンキジ</h1>
      <p className={Styles.titleText}>気になる記事をクリック！</p>
      <ProductList />
    </div>
  )
}

export default MainComponent
