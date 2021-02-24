import React from 'react'
import Styles from './StyleComponents/Nav.module.css';
import {useDispatch} from 'react-redux';
import { push } from 'connected-react-router';

const NavComponent = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <article className={ Styles.navContainer}>
        <section className={ Styles.topNavContaints}>
          <h3 className={ Styles.navTitle }>ヨクナル</h3>
          <a href="#" className={ Styles.news }></a>
          <a href="#" className={ Styles.trend }></a>
          <a href="#" className={ Styles.timeLine }></a>
        </section>
        <section className={ Styles.bottomNavContaints}>
          <h3 className={ Styles.navTitle }>ヨクスル</h3>
          <a href="#" 
          className={ Styles.post }
          onClick={() => dispatch(push('/product/edit'))}
          ></a>
          <a href="#" className={ Styles.anser }></a>
        </section>
      </article>
    </div>
  )
}

export default NavComponent
