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
          <a className={ Styles.news } onClick={() => dispatch(push("/"))} />
          <a className={ Styles.trend } onClick={() => dispatch(push("/comingSoon"))} />
          <a  className={ Styles.timeLine } onClick={() => dispatch(push("/comingSoon"))} />
        </section>
        <section className={ Styles.bottomNavContaints}>
          <h3 className={ Styles.navTitle }>ヨクスル</h3>
          <a 
          className={ Styles.post }
          onClick={() => dispatch(push('/product/edit'))}
           />
          <a className={ Styles.anser } onClick={() => dispatch(push("/comingSoon"))} />
        </section>
      </article>
    </div>
  )
}

export default NavComponent
