import React, { useState,useEffect,useCallback } from 'react'
import { PrimaryButton, TextInput } from '../components/UIkit';
import { auth,db } from '../firebase';
import { useDispatch } from "react-redux";
import { saveUsers } from '../reducks/products/operations';
import {updateInfo} from '../reducks/users/operations';
const Profile = () => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState(""),
        [email, setEmail] = useState(""),
        [role, setRole] = useState(""),
        [uid, setUid] = useState("");
    
  const inputUserName = useCallback((event) => {
    setUserName(event.target.value)
  },[setUserName]);
  
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user){
        const id = user.uid
        db.collection('users').doc(id).get()
        .then(snapshot => {
          const data = snapshot.data();
          setUserName(data.username);
          setEmail(data.email);
          setRole(data.role);
          setUid(data.uid);
        })
      }
    })
  },[]);

  return (
    <div className="c-section-container">
      <h2 className="u-text__headline u-text-center">プロフィール内容の登録・編集</h2>
      <div className="module-spacer--small" />
      <TextInput
        fullWidth={true} label={"名前を変更"} multiline={false} required={true}
        onChange={inputUserName} rows={1} value={userName} type={"text"}
      />
      <div className="module-spacer--small" />
      <div className="center">
      <PrimaryButton
        label={"変更を保存"}
        onClick={() => dispatch(saveUsers(userName, email, role, uid),updateInfo(userName))}
        />
      </div>
    </div>
  )
}

export default Profile
