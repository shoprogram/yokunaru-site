import React from 'react'
import Logo from './img/logo.png';
import {useDispatch} from 'react-redux';
import {push} from 'connected-react-router';
import Styles from './StyleComponents/Header.module.css';

const HeaderComponent = () => {
  const dispatch = useDispatch();
  return (
    <div className={ Styles.headerStyle } >
      <div className={ Styles.headerTop }>
        <img src={ Logo } alt="logo" className={ Styles.logo }/>
        <div className={ Styles.headerTopNav}>
          <a className={ Styles.logIn} onClick={() => dispatch(push("login"))}>ログイン</a>
          <a className={ Styles.signIn} onClick={() => dispatch(push("signup"))}>新規登録</a>
        </div>
      </div>
      
    </div>
  )
}

export default HeaderComponent
