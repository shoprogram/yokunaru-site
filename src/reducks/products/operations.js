import React, {useState} from 'react'
import { push } from 'connected-react-router'
import { FirebaseTimestamp, db } from '../../firebase'
import { fetchProductsAction } from './actions'

const productsRef = db.collection('products')
//firestore(db)のusesではなくproductsからデータをとってくる

export const fetchProducts = () => {
  return async (dispatch) => {
    productsRef.orderBy('updated_at', 'desc').get()
    .then(snapshots => {
      const productList =[]
      snapshots.forEach(snapshot => {
        const product = snapshot.data();
        productList.push(product)
      })
      dispatch(fetchProductsAction(productList))
    })
  }
}

export const saveProduct = (id, title, why, what, description, category, images) => {
  return async (dispatch) => {
    const timestamp = FirebaseTimestamp.now()

    const data = {
      category: category,
      description: description,
      title: title,
      images: images,
      why: why,
      what: what,
      updated_at: timestamp
    }

    if (id ==="") {
      const ref = productsRef.doc();
      id = ref.id;
      data.id = id;
      data.created_at = timestamp
    }

    return productsRef.doc(id).set(data, {merge: true})
      .then(() => {
        dispatch(push('/'))
      }).catch((error) => {
        throw new Error(error)
      })
  }
}

export const searchProducts = () => {
  
}