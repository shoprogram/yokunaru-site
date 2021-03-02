import React, {useCallback, useEffect, useState} from 'react'
import {PrimaryButton, TextInput, SelectBox} from "../components/UIkit";
import { useDispatch } from "react-redux";
import {saveProduct} from "../reducks/products/operations";
import ImageArea from '../components/Products/ImageArea';
import { auth, db } from '../firebase';

// let uid ="";

//   auth.onAuthStateChanged (user => {
//      let uid = user.uid
//      console.log(uid);
//   });
// console.log(uid);
const ProductEdit = () => {
  const dispatch = useDispatch();
  let id = window.location.pathname.split('/product/edit')[1];
  
  if(id !=="") {
    id = id.split('/')[1];
  }
  const [title, setTitle] = useState(""),
        [images, setImages] = useState([]),
        [why, setWhy] = useState(""),
        [what, setWhat] = useState(""),
        [description, setDescription] = useState(""),
        [category, setCategory] = useState(""),
        [categories, setCategories] = useState([]);

  const inputTitle = useCallback((event) => {
    setTitle(event.target.value)
  },[setTitle]);

  const inputWhy = useCallback((event) => {
    setWhy(event.target.value)
  },[setWhy]);

  const inputWhat = useCallback((event) => {
    setWhat(event.target.value)
  },[setWhat]);

  const inputDescription = useCallback((event) => {
    setDescription(event.target.value)
  },[setDescription]);


  // const categories = [
  //   {id: "info", name: "健康情報"},
  //   {id: "reha", name: "リハビリ"},
  //   {id: "after-reha", name: "術後リハビリ"},
  //   {id: "sports", name: "スポーツ"},
  //   {id: "other", name: "その他"},
  // ];
  

//   const [userId, setUserId] = useState("");
//   useEffect(() => {
//   const userSub = db
//   .collection('users')
//   .doc(uid)
  
// })
  useEffect(() => {
    if(id !== ""){
      db.collection('products').doc(id).get()
      .then(snapshot => {
        const data = snapshot.data();
        setTitle(data.title);
        setWhy(data.why);
        setWhat(data.what);
        setDescription(data.description);
        setImages(data.images);
        setCategory(data.category);
      })
    }
  },[]);

  useEffect(() => {
    db.collection('categories')
    .orderBy('order','asc')
    .get()
    .then(snapshots => {
      const list = []
      snapshots.forEach(snapshot => {
        const data = snapshot.data()
        list.push({
          id: data.id,
          name: data.name
      })
    })
      setCategories(list);
    })
  });

  return (
    <section>
       <h2 className="u-text__headline u-text-center">内容の登録・編集</h2>
            <div className="c-section-container-wide">
                <ImageArea images={images} setImages={setImages}/>
                <TextInput
                    fullWidth={true} label={"タイトル"} multiline={false} required={true}
                    onChange={inputTitle} rows={1} value={title} type={"text"}
                />
                 <TextInput
                    fullWidth={true} label={"どんな人に向けて？"} multiline={true} required={true}
                    onChange={inputWhy} rows={1} value={why} type={"text"}
                />
                 <TextInput
                    fullWidth={true} label={"なんのためにする？"} multiline={true} required={true}
                    onChange={inputWhat} rows={1} value={what} type={"text"}
                />
                <TextInput
                    fullWidth={true} label={"内容"} multiline={true} required={true}
                    onChange={inputDescription} rows={30} value={description} type={"text"}
                />
                <SelectBox
                    label={"カテゴリー"} options={categories} required={true} select={setCategory} value={category}
                />
                <div className="module-spacer--small"/>
                <div className="module-spacer--small" />
                <div className="center">
                  <PrimaryButton
                  label={"内容を投稿"}
                  onClick={() => dispatch(saveProduct(id, title, why, what, description, category, images))}
                  />
                </div>
            </div>
    </section>
  )
}

export default ProductEdit
