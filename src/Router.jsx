import React from 'react'
import {Route, Switch} from 'react-router';
import {Login, Home, SignUp} from './templates';

const Router = () => {
  return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="(/)?" component={Home} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
  )
}
// {/* Switch＋Routeで所定のURL別にページ遷移を行う */}

export default Router;
