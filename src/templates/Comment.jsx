import React, {useCallback, useEffect, useState} from 'react'
import {saveComment} from '../reducks/products/operations';
import { useDispatch } from "react-redux";
import { db, FirebaseTimestamp } from '../firebase';
import {PrimaryButton, TextInput } from "../components/UIkit";

import SendIcon from "@material-ui/icons/Send";

const Comment = (props) => {
  let commentId = window.location.pathname.split('/product/comment')[1];
  const dispatch = useDispatch();
  
  // if(id !=="") {
  //   id = id.split('/')[1];
  // }
  const [comment, setComment] = useState("");

  const inputComment = useCallback((event) => {
    setComment(event.target.value)
  },[setComment]);

  // useEffect(() => {
  //   if(id !== ""){
  //     db.collection('products').doc(id).get()
  //     .then(snapshot => {
  //       const data = snapshot.data();
  //       setComment(data.comment);
  //     })
  //   }
  // },[]);

  const newComment = (e) => {
    e.preventDefault();
    db.collection('products').doc(commentId).collection("comments").add({
      text: comment,
      timestamp: FirebaseTimestamp.now(),      
    });
    setComment("");
  };
  
  return (
    <section>
       <h2 className="u-text__headline u-text-center">コメントのツイカ</h2>
            <div className="c-section-container-wide">
                {/* <TextInput
                    fullWidth={true} label={"内容"} multiline={true} required={true}
                    onChange={inputComment} rows={5} value={comment} type={"text"}
                /> */}
                <div className="module-spacer--small"/>
                <div className="center">

                    {/* <PrimaryButton
                        label={"内容を投稿"}
                        onClick={() => dispatch(saveComment(commentId, comment))}
                    /> */}
             <form onSubmit={newComment}>
                <div>
                  <input
                  
                    type="text"
                    placeholder="Type new comment..."
                    value={comment}
                    onChange={(e) =>
                      setComment(e.target.value)
                    }
                  />
                  <button
                    disabled={!comment}
                  
                    type="submit"
                  >
                    <SendIcon />
                  </button>
                </div>
              </form>
            </div>
          </div>
    </section>
  )
}


export default Comment
