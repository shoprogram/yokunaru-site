import React from 'react'
import Styles from './StyleComponents/Nav.module.css';
import {useDispatch} from 'react-redux';
import { push } from 'connected-react-router';

const BeforeNavComponent = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <article className={ Styles.navContainer}>
        <section className={ Styles.topNavContaints}>
          <h3 className={ Styles.navTitle }>ヨクナル</h3>
          <a href="#" className={ Styles.news }  onClick={() => dispatch(push("/"))} ></a>
          <a href="#" className={ Styles.trend } onClick={() => dispatch(push("/comingSoon"))} ></a>
          <a href="#" className={ Styles.timeLine } onClick={() => dispatch(push("/comingSoon"))} ></a>
        </section>
        <section className={ Styles.bottomNavContaints}>
          <h3 className={ Styles.navTitle }>ヨクスル</h3>
          <a className={ Styles.navSignIn } onClick={() => dispatch(push('/signin'))}>
            ログインするとヨクスル(投稿する)ことができます！
          </a>
        </section>
      </article>
    </div>
  )
}

export default BeforeNavComponent
