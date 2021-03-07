import React, {useEffect, useState} from 'react'
import { push } from 'connected-react-router'
import { FirebaseTimestamp, db, auth } from '../../firebase'
import { fetchProductsAction } from './actions'

const productsRef = db.collection('products')
//firestore(db)のusesではなくproductsからデータをとってくる

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
        updated_at: timestamp,
        // username: uid,
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

// export const likeButton =  () => {
//   const[ like, setLike] = useState({count: 0, liked: false});

//   const clickLike = () => {
//     setLike({
      // count: like.count + (like.liked ? -1 : 1),
//       liked: !like.liked
//     });
//   }

//   return (
//     <>
//     button on
//     </>
//   )
// }

// export const saveComment = (commentId, comment) =>{
//   console.log(commentId);
//   return async (dispatch) => {
//     const timestamp = FirebaseTimestamp.now()
  
//     const data = {
//       comment: comment,
//       updated_at: timestamp,
//     }

//     return db.collection('products').doc(commentId).set({data})
//       .then(() => {
//         dispatch(push('/'))
//       }).catch((error) => {
//         throw new Error(error)
//       })
//   }
// }


// export const searchProducts = () => {
  
// }


