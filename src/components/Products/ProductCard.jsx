import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { yellow } from '@material-ui/core/colors';
import NoImage from '../../assets/img/src/no_image.png';
import {push} from 'connected-react-router';
import {useDispatch} from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: 8,
      padding: 0,
      width: 'calc(100% - 16px)',
      maxWidth: "230px",
      maxHeight: 'auto'
    },
    [theme.breakpoints.up('sm')]: {
      margin: 8,
      width: 'calc(50% - 16px)',
      maxWidth: '100%',
      maxHeight: 'auto'
    },
    [theme.breakpoints.up('lg')]: {
      margin: 16,
      width: 'calc(25% - 32px)',
      maxWidth: '100%',
      maxHeight: '360px'
    }
  },
  media: {
    height: 0,
    paddingTop: '60%', 
    cursor: "pointer",
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  titleStyle: {
    paddingTop: "0.5em",
    paddingBottom: "2em",
    fontWeight: 'bold',
    fontSize: '1.3em',
    cursor: "pointer",
    wordBreak: "break-all",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    lineHeight: "1.3em",
    maxHeight: "calc(1.3em*1)",
  },
  avatar: {
    backgroundColor: yellow[300],
  },
  flex: {
    display: "flex",
    justifyContent: "spase-bitween",
  },
  descriptionSpace: {
    maxWidth: "350px",
    letterSpacing: "0.05em",
    fontSize: "15px",
    color: "gray",
    wordBreak: "break-all",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    lineHeight: "2em",
    maxHeight: "calc(2em*3)",
    cursor: "pointer",
  },
  checkout: {
    color: "red",
  },
  snsContainer: {
 
  },
}));

const ProductCard = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={(props.images[0]) ? props.images[0].path : [NoImage]}
        onClick={() => dispatch(push('/product/original/'+props.id))}
      />
      <CardContent 
        onClick={() => dispatch(push('/product/original/'+props.id))}           
      >
        <Typography 
        className={classes.titleStyle}
        onClick={() => dispatch(push('/product/original/'+props.id))} 
        >
          {props.title}
        </Typography>
        <Typography 
        className={classes.descriptionSpace}
        onClick={() => dispatch(push('/product/origional/'+props.id))} 
        >
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProductCard
