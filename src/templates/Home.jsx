import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import Styles from "./Home.module.css";
import HeaderComponent from '../components/HeaderComponent';
import NavComponent from '../components/NavComponent';
import MainComponent from '../components/MainComponent';
import FooterComponent from '../components/FooterComponent';

const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector(state => state);

  return (
    <div className={ Styles.app }>
      <header className={ Styles.appHeader }>
        <HeaderComponent />
      </header>
      <body className={ Styles.appMain }>
        <div className={Styles.navContaints}>
        <NavComponent />
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

export default Home
