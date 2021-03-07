import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { yellow } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import NoImage from '../../assets/img/src/no_image.png';
import {push} from 'connected-react-router';
import {useDispatch} from 'react-redux';
import { db } from '../../firebase';
import { DockOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      margin: 8,
      width: 'calc(100% - 16px)',
      maxHeight: 'auto'
    },
    [theme.breakpoints.up('sm')]: {
      margin: 8,
      width: 'calc(50% - 16px)',
      maxHeight: 'auto'
    },
    [theme.breakpoints.up('lg')]: {
      margin: 16,
      width: 'calc(25% - 32px)',
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
    fontWeight: 'bold',
    fontSize: '1.3em',
    cursor: "pointer",
    wordBreak: "break-all",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
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
    fontSize: "small",
    color: "gray",
    wordBreak: "break-all",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    lineHeight: "18px",
    maxHeight: "calc(18px*3)",
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
  const images = (props.images.length > 0) ? props.images : [NoImage];

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };



  // const [like, setLike] = useState([
  //   {
  //     likeCount: 0,
  //     liked:false,
  //   }
  // ]);
  // const [likes, setLikes] = useState([
  //   {
  //     likeCount: 0,
  //   }
  // ]);

  // const id = props.id
  // console.log(id);
  // useEffect(() => {
  //   const selectLikes = db
  //   .collection("products")
  //   .doc(id)
  //   .collection("likes")
  //   .onsnapshot((snapshot) => {
  //     setLikes(
  //       snapshot.docs.map((doc) => ({
  //         likeCount: like.likeCount,
  //       }))
  //     );
  //   });
  //   return () => {
  //     selectLikes();
  //   };
  // },[id]);

  // const likeClick = (e) => {
  //   e.preventDefault();
  //   db.collection('products').doc(id).collection(likes).add({
  //     likeCount: like.likeCount
  //   });
  //   setLike({
  //     likeCount: like.likeCount + (like.liked ? -1 : 1),
  //     liked: !like.liked
  //   });
  // }

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={props.images[0].path}
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
      {/* <div className={classes.flex}> */}
      {/* <CardActions disableSpacing className={classes.snsContainer}>
        <IconButton aria-label="add to favorites" onClick={likeClick} className={ like.likeCount ? classes.checkout : ""}>
          {like.liked ? classes.check : ''}
          <FavoriteIcon />
        </IconButton>
          {likes.map((com) => (
            <div>{com.likeCount}</div>
          ))}
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions> */}
      {/* <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
         icon   
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }

        title={} ここにアバターnameをいれる
        subheader={props.updated_at}
      />
      <CardActions className={classes.iconSpace}>
        <IconButton aria-label="add to favorites">
        </IconButton>
        <FavoriteIcon />
      </CardActions> */}
      {/* </div> */}
    </Card>
  );
}

export default ProductCard
