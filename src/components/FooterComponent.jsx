import React from 'react'
import Logo from './img/onlyLogo.png'
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import Styles from './StyleComponents/Footer.module.css'

const FooterComponent = () => {
  return (
    <section className={Styles.footerWrap}>
    <div className={Styles.footerContainer}>
      <div className={Styles.footerContaints}>
        <img className={Styles.footerLogo} src={Logo} alt="フッターロゴ" />
        <p className={Styles.footerText}>A site where your body is made</p>
        <div className={Styles.footerIcon} >
          <div>
        <TwitterIcon />
          </div>
          <div>
        <GitHubIcon />
          </div>
        </div>
      </div>
      <div className={Styles.footerNav}>
        <p>利用規約</p>
        <p>ガイドライン</p>
        <p>お問い合わせ</p>
        <p>プライバシーポリシー</p>
      </div>
    </div>
    <div className={Styles.copyWrite}>
    <p>&copy; 2021- sho program</p>
    </div>
    </section>
  )
}

export default FooterComponent
