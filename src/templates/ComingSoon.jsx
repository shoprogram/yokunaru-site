import React from 'react'
import { makeStyles } from '@material-ui/styles';
import comingSoonImg from '../components/img/comingSoon.png'


const useStyles = makeStyles (() => ({
  img: {
    width: "100%",
    maxWidth: "1280px",
    textAlign: "center",
    margin: "0 auto",
  }
}))

const ComingSoon = () => {
  const classes = useStyles();

  return (
    <div className={classes.img}>
      <img src={comingSoonImg} alt="coming soon" className={classes.img} />
    </div>
  )
}

export default ComingSoon
