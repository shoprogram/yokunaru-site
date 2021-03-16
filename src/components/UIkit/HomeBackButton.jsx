import React from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from "react-redux";
import { push } from 'connected-react-router';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const HomeBackButton = (props) => {
    const dispatch = useDispatch()
    return (
        <Button variant="contained" onClick={() => dispatch(push("/"))}>
          <ArrowBackIosIcon />
          ホームに戻る
        </Button>
    );
};

export default HomeBackButton ;