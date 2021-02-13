import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import {connectRouter, routerMiddleware} from "connected-react-router";
import thunk from 'redux-thunk';
//react-router(reactルーティング用のライブラリ)
//middlewareとして導入

//connected-react-router(Reduxのstoreでルーティングを管理:eact-router v4,v5と互換性がある)

import {ProductsReducer} from '../products/reducers';
import {UsersReducer} from '../users/reducers';

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      products: ProductsReducer,
      router: connectRouter(history), 
      users: UsersReducer
    }),
    applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  )
}