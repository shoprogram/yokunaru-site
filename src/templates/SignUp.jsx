import React, { useCallback, useState} from 'react';
import {HomeBackButton, PrimaryButton, TextInput} from "../components/UIkit";
import {useDispatch} from "react-redux";
import {signUp} from "../reducks/users/operations";
import {push} from "connected-react-router";
import { auth, db, FirebaseTimestamp, provider } from '../firebase';
import { Button } from '@material-ui/core';
import GoogleLogo from '../assets/img/icons/googleLogo.png'

const SignUp = () => {
    const dispatch = useDispatch();
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [username, setUsername] = useState("");
    const [avatarImage, setAvatarImage] =useState();

    const inputEmail = useCallback((e) => {
        setEmail(e.target.value)
    },[setEmail]);

    const inputPassword = useCallback((e) => {
        setPassword(e.target.value)
    },[setPassword]);

    const inputConfirmPassword = useCallback((e) => {
        setConfirmPassword(e.target.value)
    },[setConfirmPassword]);

    const inputUsername = useCallback((e) => {
        setUsername(e.target.value)
    },[setUsername]);

    const signInGoogle = async () => {
        await auth.signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            if(user) {
                const uid = user.uid;
                const timestamp = FirebaseTimestamp.now();

                const userInitialData = {
                    created_at: timestamp,
                    role:"ordinary",
                    uid: uid,
                    updated_at:timestamp,
                    username: "ゲスト",
                }
                db.collection('users').doc(uid).set(userInitialData)
            }
        })
        .catch((err) => alert(err.message));
        dispatch(push('/'))
    };

    return (
        <div className="c-section-container">
            <h2 className="u-text-center u-text__headline">アカウント登録</h2>
            <div className="module-spacer--medium" />
            <TextInput
                fullWidth={true} label={"ユーザー名"} multiline={false} required={true}
                rows={1} value={username} type={"text"} onChange={inputUsername}
            />
            <TextInput
                fullWidth={true} label={"メールアドレス"} multiline={false} required={true}
                rows={1} value={email} type={"email"} onChange={inputEmail}
            />
            <TextInput
                fullWidth={true} label={"パスワード（半角英数字で6文字以上）"} multiline={false} required={true}
                rows={1} value={password} type={"password"} onChange={inputPassword}
            />
            <TextInput
                fullWidth={true} label={"パスワードの再確認"} multiline={false} required={true}
                rows={1} value={confirmPassword} type={"password"} onChange={inputConfirmPassword}
            />
            <div className="module-spacer--medium" />
            <div className="center">
                <PrimaryButton
                    label={"アカウントを登録する"}
                    onClick={() => dispatch(signUp(username, email, password, confirmPassword))}
                />
                <div className="module-spacer--small" />
                <Button
                    variant="contained"
                    onClick={signInGoogle}
                    >
                    <img src={GoogleLogo} alt="" className="google-logo"/>
                    oogle
                </Button>
                <div className="module-spacer--small" />
                <p className="u-text-small" onClick={() => dispatch(push('/signin'))}>アカウントをお持ちの方はこちら</p>
                <div className="module-spacer--small" />
                <HomeBackButton />
            </div>
        </div>
    );
};

export default SignUp;