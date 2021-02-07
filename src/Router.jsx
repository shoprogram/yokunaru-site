import React from 'react'
import {Route, Switch} from 'react-router';
import {Login, Home} from './templates';

const Router = () => {
  return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="(/)?" component={Home} />
      </Switch>
  )
}
// {/* Switch＋Routeで所定のURL別にページ遷移を行う */}

export default Router;
