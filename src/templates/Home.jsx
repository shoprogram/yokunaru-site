import React from 'react'
import {getUserId, getUsername} from "../reducks/users/selectors";
import {useSelector, useDispatch} from "react-redux";
import Styles from "./Home.module.css";
import HeaderComponent from '../components/HeaderComponent';
import NavComponent from '../components/NavComponent';
import MainComponent from '../components/MainComponent';
import {signOut} from '../reducks/users/operations';

const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector(state => state);
  const uid = getUserId(selector);
  const username = getUsername(selector)

  return (
    <div className={ Styles.app }>
      <header className={ Styles.appHeader }>
        <HeaderComponent />
        <p>ユーザーID:{uid}</p>
        <p>ユーザー名：{username}</p>
        <button onClick={() => dispatch(signOut())}>ログアウト</button>
      </header>
      <body className={ Styles.appMain }>
        <NavComponent />
        <MainComponent />
      </body>
    </div>
  )
}

export default Home
