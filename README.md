# アプリ概要
中高年・高齢者の方やスポーツをしている若年層に向けて、
健康情報やカラダが良くなる正しい運動法を身につける場を提供するためのアプリです。

- 理学療法士の知識を活かし、実際に臨床で使われている運動を紹介
- 予防リハビリテーションの観点から病院に来なくても良くなる運動や健康情報を紹介
- 術後の患者様でも安全かつ効果的に行える運動を紹介


下記ページにて公開中です！  
[ヨクナルサイト](https://yokunaru-site-28acf.firebaseapp.com/)

# アプリ開発背景
理学療法士としての職業経験から、 **「病院に来ずとも健康を維持できていただろうなぁ」** と感じる症状の患者様がいました。  
そんな患者様が病院を来る前に正しい運動知識を身に着け、病院に来なくても **ずっと健康でいてほしい** という思いからこのアプリを開発しました。  
(理学療法士：病院の中で主にリハビリテーション業務を担う職業です)

# 使用言語・技術
- HTML・CSS
- JavaScript
- React (SPAを用いた開発)
- Redux
- Firebase (Authentication, Cloud Firestore, Storage, Hosting)
- Git・Github
- Material-UI

# 機能
- タグ機能
- コメント投稿機能
- 記事投稿・編集機能
- ログイン（Google認証）機能
- パスワードリセット機能

# 使い方
### ログイン・カテゴリ検索
1. トップページからログイン(ゲストログイン)をクリック
2. 右上のハンバーガーメニューから興味のあるカテゴリを選択
3. 興味のある記事を選択

### 記事投稿
1. ログイン後、左のナビゲーションにあるトウコウをクリック
2. 画像・タイトル・内容・カテゴリをすべて記入後、投稿することができます。

### コメント投稿
1. 投稿された記事を選択し、記事の下段にあるコメント欄にコメントを入力
2. 入力された内容がコメント欄に即時反映されます。

# 工夫した点
- ターゲット層が主に中高年・高齢者の方々なので、直感的に操作しやすく見やすいUIを心がけました
- SPAを用いることでページ遷移の時間を短縮し、ユーザー離脱率が減少するように心がけました
- 継続的に開発しようと考えているため、内容の変更があることを前提で作成しました。そのため、Reactを採用し、各パーツのコンポーネント化を図ることで、それぞれを疎結合にしました。

# 追加実装予定
GithubのIssuesに実装予定の機能の内容と目的をまとめています。  
https://github.com/shoprogram/yokunaru-site/issues

