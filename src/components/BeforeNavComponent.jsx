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
          <h3>ヨクナル</h3>
          <a href="#" className={ Styles.news }>サイシン</a>
          <a href="#" className={ Styles.trend }>トレンド</a>
          <a href="#" className={ Styles.timeLine }>タイムライン</a>
        </section>
        <section className={ Styles.bottomNavContaints}>
          <h3>ヨクスル</h3>
          <a onClick={() => dispatch(push('/signin'))}>
            ログインするとヨクスル(投稿する)ことができます！
          </a>
        </section>
      </article>
    </div>
  )
}

export default BeforeNavComponent
