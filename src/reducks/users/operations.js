import {signInAction} from "./actions";
import {push} from 'connected-react-router';
import {auth, db, FirebaseTimestamp} from '../../firebase/index';

export const signIn = (email, password) => {
  return async (dispatch) => {
    

  }
}

export const signUp = (username, email, password, confirmPassword) => {
  return async (dispatch) => {
    // Validations
    // if(!isValidRequiredInput(email, password, confirmPassword)) {
    //   alert('必須項目が未入力です。');
    //   return false
    // }

    // if(!isValidEmailFormat(email)) {
    //     alert('メールアドレスの形式が不正です。もう1度お試しください。')
    //     return false
    // }
    // if (password !== confirmPassword) {
    //     alert('パスワードが一致しません。もう1度お試しください。')
    //     return false
    // }
    // if (password.length < 6) {
    //     alert('パスワードは6文字以上で入力してください。')
    //     return false
    // }
    return auth.createUserWithEmailAndPassword(email, password)
    .then(result => {
        const user = result.user
        if(user) {
          const uid = user.uid
          const timestamp = FirebaseTimestamp.now()

          const userInitialData = {
            created_at: timestamp,
            email: email,
            role:"customer",
            uid: uid,
            updated_at:timestamp,
            username: username
          }

          db.collection('users').doc(uid).set(userInitialData)
            .then(() => {
              dispatch(push('/'))
            })
        }
    })
  }
}