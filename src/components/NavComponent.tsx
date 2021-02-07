import React from 'react'
import Styles from './StyleComponents/Nav.module.css';

const NavComponent = () => {
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
          <a href="#" className={ Styles.post }>トウコウ</a>
          <a href="#" className={ Styles.anser }>カイトウ</a>
        </section>
      </article>
    </div>
  )
}

export default NavComponent
