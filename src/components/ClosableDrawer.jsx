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
import AddCircleIcon from '@material-ui/icons/AddCircle';
import HistoryIcon from '@material-ui/icons/History';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {TextInput} from  './UIkit/index';
import { push } from 'connected-react-router';
import {useDispatch} from 'react-redux';
import { signOut } from '../reducks/users/operations';
import { db } from '../firebase';

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

const ClosableDrawer = (props) => {
  const classes = useStyles();
  const {container} = props;
  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState("");

  const inputKeyword = useCallback((event) => {
    setKeyword(event.target.value)
  },[setKeyword]);

  const selectMenu = (event,path) => {
    dispatch(push(path));
    props.onClose(event)
  }

  const [filters, setFilters] = useState([
    {fanc: selectMenu, label: "すべて", id: "all", value: "/" },
    // {fanc: selectMenu, label: "すべて", id: "all", value: "/" },
    // {fanc: selectMenu, label: "すべて", id: "all", value: "/" },
  ])

  const menus = [
    {fanc: selectMenu, label: "トウコウ", icon: <AddCircleIcon />, id: "registar", value: "/product/edit" },
    // {fanc: selectMenu, labe: "リレキ", icon: <HistoryIcon /> id: "history", value: "/history"}
    {fanc: selectMenu, label: "プロフィール", icon: <PersonIcon />, id: "profile", value: "/profile"}
  ];

  useEffect(() => {
    db.collection('categories')
    .orderBy('order', 'asc')
    .get()
    .then(snapshots => {
      const list = []
      snapshots.forEach(snapshot => {
        const category = snapshot.data()
        list.push({fanc: selectMenu, label: category.name, id: category.id, value: `/?category=${category.id}`})
      })
      setFilters(prevState => [...prevState, ...list])
    })
  },[]);

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
            {menus.map(menu => (
              <ListItem button key={menu.id} onClick={(e) => menu.fanc(e, menu.value)}>
                <ListItemIcon>
                  {menu.icon}
                </ListItemIcon>
                <ListItemText primary={menu.label} />
              </ListItem>
            ))}
            
            <ListItem button key="logout" onClick={() => dispatch(signOut())}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary={"ログアウト"} />
            </ListItem>
          </List>
          <Divider />
          <List>
            {filters.map(filter => (
              <ListItem button key={filter.id} onClick={(e) => filter.fanc(e, filter.value)}>
                <ListItemText primary={filter.label} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  )
}

export default ClosableDrawer
