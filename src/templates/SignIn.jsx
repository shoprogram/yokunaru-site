import React, {useState, useCallback} from 'react';
import {HomeBackButton, PrimaryButton, TextInput} from "../components/UIkit";
import {useDispatch} from "react-redux";
import {signIn} from "../reducks/users/operations";
import {push} from "connected-react-router"
import { auth, db, FirebaseTimestamp, provider } from '../firebase';
import { Button } from '@material-ui/core';
import GoogleLogo from '../assets/img/icons/googleLogo.png'

const SignIn = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const inputEmail = useCallback((e) => {
        setEmail(e.target.value)
    },[]);

    const inputPassword = useCallback((e) => {
        setPassword(e.target.value)
    },[]);

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
            <h2 className="u-text-center u-text__headline">ログイン</h2>
            <div className="module-spacer--medium" />
            <TextInput
                fullWidth={true}
                label={"メールアドレス"} multiline={false} required={true}
                rows={1} value={email} type={"email"} onChange={inputEmail}
            />
            <TextInput
                fullWidth={true}
                label={"パスワード"} multiline={false} required={true}
                rows={1} value={password} type={"password"} onChange={inputPassword}
            />
            <div className="module-spacer--medium" />
            <div className="center">
                <PrimaryButton label={"ログイン"} onClick={() => dispatch(signIn(email, password))} />
                <div className="module-spacer--small" />
            <Button
                variant="contained"
                // classNmae={classes.submit}
                onClick={signInGoogle}
                // onClick={() => dispatch(push('/'))}
            >
                <img src={GoogleLogo} alt="" className="google-logo"/>
                oogle
            </Button>

            <div className="module-spacer--small" />
                <p className="pointer" onClick={() => dispatch(push('/signin/reset'))}>パスワードを忘れた方はこちら</p>
                <p className="u-text-small pointer" onClick={() => dispatch(push('/signup'))}>アカウント登録がまだの方はこちら</p>
                <div className="module-spacer--small" />
            <HomeBackButton />
            </div>
        </div>
    );
};

export default SignIn;