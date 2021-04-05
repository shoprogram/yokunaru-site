import React, {useState, useEffect, useCallback} from 'react'
import { auth, db, FirebaseTimestamp } from '../firebase';
import { useSelector, useDispatch } from "react-redux";
import { IconButton, makeStyles } from '@material-ui/core';
import HeaderComponent from '../components/HeaderComponent';
import MessageIcon from '@material-ui/icons/Message';
import Styles from './tempStyles/ProductDetail.module.css';
import { getProducts } from '../reducks/products/selectors';
import BeforeHeaderComponent from '../components/BeforeHeaderComponent';
import { HomeBackButton } from '../components/UIkit';
import NoImage from '../assets/img/src/no_image.png';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
  detail: {
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
        margin: '0 auto 16px auto',
        height: 320,
        width: 320
    },
    [theme.breakpoints.up('sm')]: {
        margin: '0 auto',
        height: 'auto',
        width: '620px',
    },
  },
  images: {
    width: '100%',
    height: 'auto',
    paddingTop: '30px',
    paddingBottom: '30px',
    margin: '0 auto',
    textAlign: 'center',
  },
  title: {
    fontSize: '1.5em',
    fontWeight: 'bold',
    paddingBottom: '20px',
  },
  commentForm: {
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
        margin: '0 auto 16px auto',
        height: 320,
        width: 320
    },
    [theme.breakpoints.up('sm')]: {
        margin: '0 auto',
        height: 'auto',
        width: '620px',
        paddingTop: "60px"
    },
  },
  commentButton: {
    border: "none",
    color: "gray",
    backgroundColor: "transparent",
    cursor: "pointer",
    position: "relative",
    top: "6px",
    left: "6px",
  },
  commentButtonDisable: {
    display: "none",
  },
  likeArea: {
    position: "relative",
    right: "30%",
    top: "30%",
  },
  likeButton: {
    fontWeight: "800",
    fontSize: "80px",
  },
  checkout: {
    color: "red",
  },
  hidden: {
    display: "none",
  },
}))

const ProductDetail = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector(state => state);
  const path = selector.router.location.pathname;
  const id = path.split('/')[3];

  const [user, setUser] = useState(null);

  useEffect(() => {
    return auth.onAuthStateChanged(user => {
      setUser(user);
    });
  },[]);
  const products = getProducts(selector);
  
  const [product, setProduct] = useState(null);

  const [comment, setComment] = useState("");
  const data = {
    text: comment,
      timestamp: FirebaseTimestamp.now(),
  }

  
  useEffect(() => {
    db.collection('products').doc(id).get().then(doc => {
      const data = doc.data()
      setProduct({data})
    })
  },[]);
  
  const [comments, setComments] = useState([
    {
      id: "",
      text: "",
      // username:"",
      timestamp: null,
    },
  ]);

  useEffect(() => {
    const unSub = db
    .collection("products")
    .doc(id)
    .collection("comments")
    .orderBy("timestamp", "desc")
    .onSnapshot((snapshot) => {
      setComments(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          username: doc.data().username,
          text: doc.data().text,
          timestamp: doc.data().timestamp,
        }))
      );
    });
    return () => {
      unSub();
    };
  }, [id]);

    const newComment = (e) => {
      e.preventDefault();
      db.collection('products').doc(id).collection("comments").add({
        uid: user.uid,
        username: user.displayName,
        text: comment,
        timestamp: FirebaseTimestamp.now(),      
      });
      setComment("");
    };

    //like処理
    const [like, setLike] = useState([]);
    
    useEffect(() => {
      db.collection("products").doc(id).get()
      .then(snapshot => {
        setLike(snapshot.data().likeCount);
      })
    },[]);

    const likeClick = () => {
      setLike(
        like + 1
      );
      
      console.log(like);
    const data = {
      likeCount: like,
    }
    return db.collection('products').doc(id).update(data, {merge: true})
      .then(() => {

      }).catch((error) => {
        throw new Error(error)
      })
    }
  

  return (
    <>
      {user ? <HeaderComponent/> : <BeforeHeaderComponent/>}
      <article className={classes.detail}>
      <section>
        {product && (
          <div className="p-grid-row">
            {/* <div className={classes.images}> */}
              <img className={classes.images} src={product.data.images[0] ? product.data.images[0].path : [NoImage]} alt="トップ画像"/>
            {/* </div> */}
            <h2 className={classes.title}>{product.data.title}</h2>
            <p>{product.data.description}</p>

          </div>
        )}
      </section>
      {/* <IconButton className={ like.liked ? classes.checkout : ""} onClick={likeClick}>
            <FavoriteIcon className={classes.likeButton}/>
        </IconButton> */}
      <div className="module-spacer--large"/>
      <div className="module-spacer--medium"/>
      <div className="comment-line"/>
      <h1>
        コメント一覧
      </h1>
      <section className={Styles.commentArea}>
        <div  className={Styles.commentDisplay}>
        {comments.map((com) => (
          <div>
            <div>{new Date(com.timestamp?.toDate()).toLocaleString()} | ユーザー名：{com.username}</div>
            <div>{com.text}</div>
          </div>
        ))}
        </div>
        <div className="module-spacer--medium"/>
        <form onSubmit={newComment} className={Styles.commentForm}>
          <div>
            <input 
              className={user ? classes.commentInput : classes.hidden} 
              type={user ? "text" : "hidden"} 
              placeholder="コメントを入力" 
              value={comment} 
              onChange={(e) => setComment(e.target.value)}
            />
            <p className={user ? classes.hidden : classes.before}>ログインするとコメントができます</p>
            <button 
              disabled={!comment} 
              className={comment ? classes.commentButton : classes.commentButtonDisable} 
              type="submit"
            >
              <MessageIcon />
            </button>
          </div>
        </form>
      </section>
      <div className="module-spacer--large"/>
      <HomeBackButton />
      </article>
    </>
  )
}

export default ProductDetail
