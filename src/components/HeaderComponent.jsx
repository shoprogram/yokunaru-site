import React, {useState, useCallback} from 'react'
import Logo from './img/onlyLogo.png';
import {useDispatch} from 'react-redux';
import {push} from 'connected-react-router';
import Styles from './StyleComponents/Header.module.css';
import { signOut } from '../reducks/users/operations';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { makeStyles } from '@material-ui/styles';
import {ClosableDrawer} from './index';
import mainImg from './img/yokunaruMain.png';


const useStyles = makeStyles ((theme) => ({
  menuIcon: {
    fontSize: "35px",
    cursor: "pointer",
    marginLeft: "30px",
  },
}))

const HeaderComponent = () => {
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
      <div className={ Styles.headerContainer}>
        <div className={ Styles.headerTop }>
          <img src={ Logo } alt="logo" className={ Styles.logo } onClick={() => dispatch(push("/"))}/>
          <div className={ Styles.headerTopNav}>
            <a className={ Styles.signIn} onClick={() => dispatch(signOut())}>ログアウト</a>
            <a className={ Styles.signUp} onClick={() => dispatch(push("/signup"))}>新規登録</a>
            <MenuRoundedIcon className={classes.menuIcon} handleDrawerToggle={handleDrawerToggle} onClick={(event) => handleDrawerToggle(event)}/>
          </div>
        </div>
        <ClosableDrawer open={open} onClose={handleDrawerToggle}/>
      </div>
        <img src={mainImg} alt="" className={Styles.mainImg}/>
    </div>
  )
}

export default HeaderComponent
