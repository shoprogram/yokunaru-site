import React, {useState, useCallback} from 'react'
import Logo from './img/onlyLogo.png';
import {useDispatch} from 'react-redux';
import {push} from 'connected-react-router';
import Styles from './StyleComponents/Header.module.css';
import { guestSignIn } from '../reducks/users/operations';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { makeStyles } from '@material-ui/styles';
import {BeforeClosableDrawer} from './index';
import mainImg from './img/yokunaruMain.png';

const useStyles = makeStyles ((theme) => ({
  menuIcon: {
    fontSize: "35px",
    cursor: "pointer",
  },
  mainImg: {
    width: "100%",
  },
}))

const BeforeHeaderComponent = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  
  const handleDrawerToggle = useCallback((event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(!open)
  },[setOpen, open]);

  return (
    <div className={ Styles.headerStyle } >
      <div className={Styles.headerContainer}>
        <div className={ Styles.headerTop }>
          <img src={ Logo } alt="logo" className={ Styles.logo }/>
          <div className={ Styles.headerTopNav}>
            <a className={ Styles.description } onClick={() => {dispatch(push("description"))
            }}>使い方</a>
            <a className={Styles.guest} onClick={() => dispatch(guestSignIn())}>ゲストログイン(企業様はこちらから)</a>
            <a className={ Styles.signIn} onClick={() => dispatch(push("signin"))}>ログイン</a>
            <a className={ Styles.signUp} onClick={() => dispatch(push("signup"))}>新規登録</a>
            <MenuRoundedIcon className={classes.menuIcon} handleDrawerToggle={handleDrawerToggle} onClick={(event) => handleDrawerToggle(event)}/>
          </div>
        </div>
        <BeforeClosableDrawer open={open} onClose={handleDrawerToggle}/>
      </div>
      <img src={mainImg} alt="" className={classes.mainImg}/>
    </div>
    
  )
}

export default BeforeHeaderComponent
