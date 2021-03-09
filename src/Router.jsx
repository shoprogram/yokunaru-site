import React from 'react'
import {Route, Switch} from 'react-router';
import Auth from './Auth';
import { signOut } from './reducks/users/operations';
import {BeforeSignInHome, Home, SignUp, SignIn, Reset, ProductEdit, ProductList, ProductDetail, SearchProducts, Comment, Description} from './templates';

const Router = () => {
  return (
      <Switch>
        <Route exact path={"/signin"} component={SignIn} />
        <Route exact path={"/signup"} component={SignUp} />
        <Route exact path={"/signin/reset"} component={Reset} />
        {/* <Route exact path={"/list"} component={ProductList} /> */}
        <Route exact path={"/before"} component={BeforeSignInHome} />
        <Route exact path={"/search"} component={SearchProducts} />
        <Route exact path={"/description"} component={Description} />
        <Auth>
        <Route exact path={"/product/original/:id"} component={ProductDetail} />
          <Route exact path={"(/)?"} component={Home} />
          {/* <Route exact path={"/signout"} component={signOut} /> */}
          <Route path={"/product/edit(/:id)?"} component={ProductEdit} />
          {/* <Route exact path={"/product/edit"} component={ProductEdit} /> */}
          <Route exact path={"/product/comment/:id"} component={Comment} />
        </Auth>
      </Switch>
  )
}
// {/* Switch＋Routeで所定のURL別にページ遷移を行う */}
// Authの中はログイン状態でのみ表示されるようになっている

export default Router;
