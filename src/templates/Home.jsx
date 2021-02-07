import React from 'react'
import {getUserId} from "../reducks/users/selectors";
import {useSelector} from "react-redux";
import Styles from "./Home.module.css";
import HeaderComponent from '../components/HeaderComponent';
import NavComponent from '../components/NavComponent';
import MainComponent from '../components/MainComponent';

const Home = () => {
  const selector = useSelector(state => state);
  const uid = getUserId(selector);

  return (
    <div className={ Styles.app }>
      <header className={ Styles.appHeader }>
        <HeaderComponent />
      </header>
      <body className={ Styles.appMain }>
        <NavComponent />
        <MainComponent />
      </body>
    </div>
  )
}

export default Home
