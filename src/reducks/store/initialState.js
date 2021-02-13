// initialStateはStoreの初期状態を書く
const initialState = {
  products: {
    list: []
  },
  users: {
    isSignedIn: false,
    role: "",
    uid: "",
    username: ""
  }
};

export default initialState