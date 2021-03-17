import React, {useState, useCallback, useEffect} from 'react'
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {makeStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {TextInput} from  './UIkit/index';
import { push } from 'connected-react-router';
import {useDispatch} from 'react-redux';
import ApartmentIcon from '@material-ui/icons/Apartment';
import { guestSignIn } from '../reducks/users/operations';
import DescriptionIcon from '@material-ui/icons/Description';
import GroupAddIcon from '@material-ui/icons/GroupAdd';

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      flexSrink: 0,
      width: 256
    }
  },
  toolbar: theme.mixins.toolbar,
  drawePaper: {
    width: 256
  },
  searchField: {
    alignItems: 'center',
    display: 'flex',
    marginLeft: 32
  },
}));

const BeforeClosableDrawer = (props) => {
  const classes = useStyles();
  const {container} = props;
  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState("");

  const inputKeyword = useCallback((event) => {
    setKeyword(event.target.value)
  },[setKeyword]);


  return (
    <div>
      <Drawer
        container={container}
        variant="temporary"
        anchor="right"
        open={props.open}
        onClose={(e) => props.onClose(e)}
        classes={{paper: classes.drawePaper}}
      >
        <div>
          <div className={classes.searchField}>
            <TextInput
              fullWidth={false} label={"キーワードを入力"} multiline={false} onChange={inputKeyword} required={false} rows={1} value={keyword} type={"text"}
            />
            <IconButton>
              <SearchIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
          <ListItem button key="logout" onClick={() => dispatch(push('/signup'))}>
              <ListItemIcon>
                <GroupAddIcon />
              </ListItemIcon>
              <ListItemText primary={"新規登録"} />
            </ListItem>
            <ListItem button key="logout" onClick={() => dispatch(push('/signin'))}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary={"ログイン"} />
            </ListItem>
            <ListItem button key="logout" onClick={() => dispatch(guestSignIn())}>
              <ListItemIcon>
                <ApartmentIcon />
              </ListItemIcon>
              <ListItemText primary={"ゲストログイン"} />
            </ListItem>
            <ListItem button key="logout" onClick={() => dispatch(push('/description'))}>
              <ListItemIcon>
                <DescriptionIcon />
              </ListItemIcon>
              <ListItemText primary={"使い方"} />
            </ListItem>
          </List>
          <Divider />
        </div>
      </Drawer>
    </div>
  )
}

export default BeforeClosableDrawer
