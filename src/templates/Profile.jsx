import React, { useState,useEffect,useCallback } from 'react'
import { setSourceMapRange } from 'typescript'
import { TextInput } from '../components/UIkit';
import { auth,db } from '../firebase'

const Profile = () => {
  const [userName, setUserName] = useState("");
  //内容増やすときはここ追加
  
  const inputUserName = useCallback((event) => {
    setUserName(event.target.value)
  },[setUserName]);
  
  
  // const [user, setUser] = useState(null);
  // useEffect(() => {
  //   return auth.onAuthStateChanged(user => {
  //     setUser(user);
  //   });
  // },[]);
  


  // const [users, setUsers] = useState(null);
  // useEffect(() => {
  //     db.collection('users').doc(id).get().then(doc => {
  //         const data = doc.data()
  //         setUsers({data})
  //       })
  //     },[]);
      
  // useEffect(() => {
  //     db.collection('users').doc(id).get()
  //     .then(snapshot => {
  //       const data = snapshot.data();
  //       setUserName(data.userName);
  //     })
  // },[]);

  return (
    <div>
      <TextInput
        fullWidth={true} label={"タイトル"} multiline={false} required={true}
        onChange={inputUserName} rows={1} value={userName} type={"text"}
      />
    </div>
  )
}

export default Profile
