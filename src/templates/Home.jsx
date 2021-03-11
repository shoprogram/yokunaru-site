import React from 'react'
import {getUserId, getUsername} from "../reducks/users/selectors";
import {useSelector, useDispatch} from "react-redux";
import Styles from "./Home.module.css";
import HeaderComponent from '../components/HeaderComponent';
import NavComponent from '../components/NavComponent';
import MainComponent from '../components/MainComponent';
import {signOut} from '../reducks/users/operations';
import FooterComponent from '../components/FooterComponent';

const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector(state => state);
  // const uid = getUserId(selector);
  // const username = getUsername(selector)

  return (
    <div className={ Styles.app }>
      <header className={ Styles.appHeader }>
        <HeaderComponent />
        {/* <p>ユーザーID:{uid}</p>
        <p>ユーザー名：{username}</p> */}
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
