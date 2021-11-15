import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import ErrorBoundry from "./components/error-boundry/error-boundry";
import {Provider} from "react-redux";
import {BookStoreServiceProvider} from "./bookstore-service-context/bookstore-service-context";
import BookstoreService from "./services/bookstore-service";
import {Router} from "react-router-dom";
import { createBrowserHistory } from "history";

import store from "./store";

const history = createBrowserHistory();


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <ErrorBoundry>
              <BookStoreServiceProvider value={BookstoreService}>
                  {/*//<Router history={history}>*/}
                      <App />
                  {/*</Router>*/}
              </BookStoreServiceProvider>
          </ErrorBoundry>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
