import React from 'react'
import Logo from './img/logo.png';
import {useDispatch} from 'react-redux';
import {push} from 'connected-react-router';
import Styles from './StyleComponents/Header.module.css';
import { signOut } from '../reducks/users/operations';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles ((theme) => ({
  menuIcon: {
    fontSize: "35px",
  }
}))

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <div className={ Styles.headerStyle } >
      <div className={ Styles.headerTop }>
        <img src={ Logo } alt="logo" className={ Styles.logo } onClick={() => dispatch(push("/"))}/>
        <div className={ Styles.headerTopNav}>
          <a className={ Styles.logIn} onClick={() => dispatch(signOut())}>ログアウト</a>
          <a className={ Styles.signIn} onClick={() => dispatch(push("/signup"))}>新規登録</a>
          <MenuRoundedIcon className={classes.menuIcon}/>
        </div>
      </div>
    </div>
  )
}

export default HeaderComponent
