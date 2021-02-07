import React from 'react'
import Logo from './img/logo.png';
import Styles from './StyleComponents/Header.module.css';

const HeaderComponent = () => {
  return (
    <div className={ Styles.headerStyle } >
      <div className={ Styles.headerTop }>
        <img src={ Logo } alt="logo" className={ Styles.logo }/>
        <div className={ Styles.headerTopNav}>
          <a href="#" className={ Styles.logIn}>ログイン</a>
          <a href="#" className={ Styles.signIn}>新規登録</a>
        </div>
      </div>
      
    </div>
  )
}

export default HeaderComponent
