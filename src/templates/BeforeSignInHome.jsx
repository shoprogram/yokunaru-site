import React from 'react'
import Styles from "./Home.module.css";
import BeforeHeaderComponent from '../components/BeforeHeaderComponent';
import BeforeNavComponent from '../components/BeforeNavComponent';
import MainComponent from '../components/MainComponent';
import FooterComponent from '../components/FooterComponent';
import { listenAuthState } from '../reducks/users/operations';
import { push } from 'connected-react-router';
import { useDispatch } from "react-redux";

const BeforeSignInHome = () => {
  const dispatch = useDispatch();
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
