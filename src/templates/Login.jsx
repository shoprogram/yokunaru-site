import React from 'react'
import {useDispatch} from 'react-redux';
import { signIn } from '../reducks/users/operations';


const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>ログイン</h2>
      <button onClick={() => dispatch(signIn())} >
        ログインする
      </button>
    </div>
  )
}
// {/* pushメソッドで引数に渡したURLに遷移する事ができる */}

export default Login
