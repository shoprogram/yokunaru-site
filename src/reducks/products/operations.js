import React, {useEffect, useState} from 'react'
import { push } from 'connected-react-router'
import { FirebaseTimestamp, db, auth } from '../../firebase'
import { fetchProductsAction } from './actions'

const productsRef = db.collection('products')
const usersRef = db.collection('users')

export const fetchProducts = (category) => {
  return async (dispatch) => {
    let query = productsRef.orderBy('updated_at', 'desc');
    query = (category !== "") ? query.where('category', '==', category) : query;
    query.get()
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

export const saveProduct = (id, title, why, what, description, category, images, user) => {
  return async (dispatch) => {
    if(title === "" || description === "" || category === "") {
      alert("必須項目を入力してください")
      return false
    }

    const timestamp = FirebaseTimestamp.now()
      const data = {
        category: category,
        description: description,
        title: title,
        images: images,
        why: why,
        what: what,
        updated_at: timestamp,
        uid: user.uid,
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

export const saveUsers = (username, email, role, uid) => {
  return async (dispatch) => {
    const timestamp = FirebaseTimestamp.now()
      const data = {
        username: username,
        email: email,
        uid: uid,
        role: role,
        updated_at: timestamp,
      }

    if (uid ==="") {
      const ref = usersRef.doc();
      uid = ref.uid;
      data.uid = uid;
      data.created_at = timestamp
    }

    return usersRef.doc(uid).set(data, {merge: true})
      .then(() => {
        dispatch(push('/'))
      }).catch((error) => {
        throw new Error(error)
      })
  }
}