import React from 'react'
import {Route, Switch} from 'react-router';
import Auth from './Auth';
import {Home, SignUp, SignIn, Reset, ProductEdit} from './templates';

const Router = () => {
  return (
      <Switch>
        <Route exact path={"/signin"} component={SignIn} />
        <Route exact path={"/signup"} component={SignUp} />
        <Route exact path={"/signin/reset"} component={Reset} />
        <Auth>
          <Route exact path={"(/)?"} component={Home} />
          <Route exact path={"/product/edit"} component={ProductEdit} />
        </Auth>
      </Switch>
  )
}
// {/* Switch＋Routeで所定のURL別にページ遷移を行う */}
// Authの中はログイン状態でのみ表示されるようになっている

export default Router;
