import React from 'react'
import {Route, Switch} from 'react-router';
import Auth from './Auth';
import {BeforeSignInHome, Home, SignUp, SignIn, Reset, ProductEdit, ProductDetail, SearchProducts, Description, Profile, ComingSoon} from './templates';

const Router = () => {
  return (
      <Switch>
        <Route exact path={"/signin"} component={SignIn} />
        <Route exact path={"/signup"} component={SignUp} />
        <Route exact path={"/signin/reset"} component={Reset} />
        <Route exact path={"/before"} component={BeforeSignInHome} />
        <Route exact path={"/search"} component={SearchProducts} />
        <Route exact path={"/description"} component={Description} />
        <Route exact path={"/comingSoon"} component={ComingSoon} />
        <Route exact path={"/product/original/:id"} component={ProductDetail} />
        <Auth>
          <Route exact path={"(/)?"} component={Home} />
          <Route exact path={"/profile"} component={Profile}/>
          <Route path={"/product/edit(/:id)?"} component={ProductEdit} />
          <Route exact path={"/product/comment/:id"} component={Comment} />

        </Auth>
      </Switch>
  )
}
export default Router;
