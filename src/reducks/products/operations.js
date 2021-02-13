import React from 'react'
import { push } from 'connected-react-router'
import { FirebaseTimestamp, db } from '../../firebase'


const productsRef = db.collection('products')

export const saveProduct = (title, why, what, description, category, images) => {
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
    const ref = productsRef.doc();
    const id = ref.id;
    data.id = id;
    data.created_at = timestamp

    return productsRef.doc(id).set(data)
      .then(() => {
        dispatch(push('/'))
      }).catch((error) => {
        throw new Error(error)
      })
  }
}
