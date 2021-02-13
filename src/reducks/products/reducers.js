import * as Actions from './actions';
import initialState from '../store/initialState';

export const ProductsReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case Actions.SIGN_IN:
      return {
        ...state,//actionsの中に存在しなければ、initialStateにある初期状態のStateをとってくる
        ...action.payload
      }
      case Actions.SIGN_OUT:
      return {
        ...action.payload
      }
      default:
          return state
  }
}