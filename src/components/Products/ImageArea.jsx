import React, {useCallback} from 'react'
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/styles";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import { storage } from "../../firebase";
import ImagePreview from "./ImagePreview";
import {useDispatch} from "react-redux";

const useStyles = makeStyles( {
  icon: {
    height: 48,
    width: 48
  }
});

const ImageArea = (props) => {
const classes = useStyles();
const dispatch = useDispatch();
    const images = props.images;
    console.log(images);

    const deleteImage = useCallback(async (id) => {
        const ret = window.confirm('この画像を削除しますか？')
        if (!ret) {
            return false
        } else {
            const newImages = images.filter(image => image.id !== id)
            props.setImages(newImages);
            return storage.ref('images').child(id).delete()
        }
    }, [images])
    
const uploadImage = useCallback((event) => {
  const file = event.target.files;
  let blob = new Blob(file, { type: "image/jpeg" });

  // Generate random 16 digits strings
  const S="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const N=16;
  const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N))).map((n)=>S[n%S.length]).join('')

  const uploadRef = storage.ref('images').child(fileName);
  const uploadTask = uploadRef.put(blob);

  uploadTask.then(() => {
      // Handle successful uploads on complete
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          const newImage = {id: fileName, path: downloadURL};
          props.setImages((prevState => [...prevState, newImage]))
      });
  })
}, [props.setImages])

//オブジェクトが空かどうか判定する処理
const isEmpty = (obj) => {
  return !Object.keys(obj).length;
}

  return (
    <div>
      <div className="p-grid__list-images">
                {props.images.length > 0 && (
                    props.images.map(image => 
                    <ImagePreview delete={deleteImage} id={image.id} path={image.path} key={image.id} /> )
                )}
      </div>
      {isEmpty(images) === true && (
        <div className="u-text-left">
                <span>メイン画像を登録する</span>
                <IconButton className={classes.icon}>
                    <label>
                        <AddPhotoAlternateIcon />
                          <input className="u-display-none" type="file" id="image" onChange={e => uploadImage(e)}/>
                    </label>
                </IconButton>
            </div>
      )} 
      {isEmpty(images) === false  && (
        <p>メイン画像は1枚のみ登録できます</p>
      )}
    </div>
  )
}

export default ImageArea
