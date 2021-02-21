import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { store } from './app/store';
import { Provider } from 'react-redux';
import createStore from './reducks/store/store';
// import * as serviceWorker from './serviceWorker';
import {ConnectedRouter} from "connected-react-router";
import * as History from "history";
import {MuiThemeProvider} from '@material-ui/core';
import {theme} from "./assets/theme";

const history = History.createBrowserHistory();
// historyを作って↓に渡している
export const store = createStore(history);

ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}> 
    {/* App component全体でstoreの値が参照できるようになる */}
      <ConnectedRouter history={history}>
        {/* ブラウザのURL遷移の履歴が管理できるようになる */}
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </ConnectedRouter>
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
