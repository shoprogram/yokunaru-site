import React, {useState, useEffect, useCallback} from 'react'
import { db } from '../firebase';
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from '@material-ui/core';

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
        width: 400
    },
},
}))

const ProductDetail = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const selector = useSelector(state => state);
  const path = selector.router.location.pathname;
  const id = path.split('/')[2];
  // console.log(path.split('/'));
  // console.log(path);
  // console.log(id);

  const [product, setProduct] = useState(null);


  useEffect(() => {
    db.collection('products').doc(id).get().then(doc => {
      const data = doc.data()
      setProduct(data)
      })
  },[]);
  
  return (
    <section className="c-section-wrapin">
      {product && (
        <div className="p-grid-row">
          <h2 className={classes.detail}>{product.title}</h2>
          <p className={classes.detail}>{product.images}</p>
          <p className={classes.detail}>{product.description}</p>

        </div>
      )}
    </section>
  )
}

export default ProductDetail
