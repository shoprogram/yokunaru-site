import React, {useState, useEffect, useCallback} from 'react'
import { db } from '../firebase';
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from '@material-ui/core';
import HeaderComponent from '../components/HeaderComponent';
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
  main : {

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
}))

const ProductDetail = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector(state => state);
  const path = selector.router.location.pathname;
  const id = path.split('/')[3];

  const [product, setProduct] = useState(null);

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
    </>
  )
}

export default ProductDetail
