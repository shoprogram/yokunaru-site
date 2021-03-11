import React from 'react'
import {getUserId, getUsername} from "../reducks/users/selectors";
import {useSelector, useDispatch} from "react-redux";
import Styles from "./Home.module.css";
import BeforeHeaderComponent from '../components/BeforeHeaderComponent';
import BeforeNavComponent from '../components/BeforeNavComponent';
import MainComponent from '../components/MainComponent';
import {signOut} from '../reducks/users/operations';
import FooterComponent from '../components/FooterComponent';

const BeforeSignInHome = () => {
  const dispatch = useDispatch();
  // const selector = useSelector(state => state);
  // const uid = getUserId(selector);
  // const username = getUsername(selector)
  return (
    <div className={ Styles.app }>
      <header className={ Styles.appHeader }>
        <BeforeHeaderComponent />
      </header>
      <body className={ Styles.appMain }>
        <div className={Styles.navContaints}>
        <BeforeNavComponent />
        </div>
        <div className={Styles.mainContaints}>
        <MainComponent />
        </div>
      </body>
      <footer>
        <FooterComponent />
      </footer>
    </div>
  )
}

export default BeforeSignInHome
