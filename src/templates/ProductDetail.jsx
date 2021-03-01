import React, {useState, useEffect, useCallback} from 'react'
import { db, FirebaseTimestamp } from '../firebase';
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from '@material-ui/core';
import HeaderComponent from '../components/HeaderComponent';
import SendIcon from "@material-ui/icons/Send";
import { push } from 'connected-react-router';
// import { BorderLeftTwoTone } from '@material-ui/icons';

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
  // sendIcon: {
  //   marginTop: "15px",
  //   color: "black",
  //   cursor: "pointer",
  // },
  commentButton: {
    border: "none",
    color: "black",
    backgroundColor: "transparent",
    cursor: "pointer",
  },
  commentButtonDisable: {
    display: "none",
  },
}))

const ProductDetail = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector(state => state);
  const path = selector.router.location.pathname;
  const id = path.split('/')[3];
  
  const [product, setProduct] = useState(null);
 
  const [comment, setComment] = useState("");
  const data = {
    text: comment,
      timestamp: FirebaseTimestamp.now(),
      // username: selector.username,
  }
  const newComment = (e) => {
    e.preventDefault();
    db.collection("products").doc(id).collection("comments").set(data,{merge: true});
    setComment("");
  };

  useEffect(() => {
    db.collection('products').doc(id).get().then(doc => {
      const data = doc.data()
      setProduct({data})
      })
  },[]);
  
  return (
    <>
      <HeaderComponent />
      <section className={classes.detail}>
        {product && (
          <div className="p-grid-row">
            {/* <div className={classes.images}> */}
              <img className={classes.images} src={product.data.images[0].path} alt="トップ画像"/>
            {/* </div> */}
            <h2 className={classes.title}>{product.data.title}</h2>
            <p>{product.data.description}</p>

          </div>
        )}
      </section>
      <form onSubmit={newComment}>
        <div className={classes.commentForm}>
          <input className={classes.commentInput} type="text" placeholder="コメントを入力" value={comment} onChange={(e) => setComment(e.target.value)}/>
          <button disabled={!comment} className={comment ? classes.commentButton : classes.commentButtonDisable} type="submit">
            <SendIcon className={classes.sendIcon}/>
          </button>
        </div>
      </form>
      <button
      onClick={() => dispatch(push("/product/comment/"+id))}
      >コメント
      </button>
    </>
  )
}

export default ProductDetail
