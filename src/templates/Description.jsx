import React from 'react'
import mainImage from '../components/img/description.png'
import headerImage from '../components/img/headerDescription.png';
import drawerImage from '../components/img/menuDescription.png'

const Description = () => {
  return (
    <div className="c-section-wrapin">
    <h1 className="description-title" >サイトの使い方</h1>
    <img src={headerImage} className="c-section-container-wide" />
    <div className="module-spacer--medium" />
    <p className="c-section-container-wide">①まずはログインしましょう</p>
    <div className="under-line"></div>
    <img className="c-section-container-wide" src={mainImage} alt="説明用初期画像"/>
    <p className="c-section-container-wide">②気になる記事をクリック</p>
    <div className="under-line"></div>
    <img className="c-section-container-wide" src={drawerImage} alt="説明用初期画像"/>
    <p className="c-section-container-wide">③右上のメニューを開くとカテゴリ検索できます</p>
    <div>
    </div>
    </div>
  )
}

export default Description
