import * as Actions from './actions';
import initialState from '../store/initialState';

export const UsersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case Actions.SIGN_IN:
      return {
        ...state,//actionsの中に存在しなければ、initialStateにある初期状態のStateをとってくる
        ...action.payload
      }
      default:
          return state
  }
}