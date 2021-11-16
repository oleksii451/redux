import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import ErrorBoundry from "./components/error-boundry/error-boundry";
import {Provider} from "react-redux";
import {BookStoreServiceProvider} from "./bookstore-service-provider/bookstore-service-provider";
import BookstoreService from "./services/bookstore-service";
import { BrowserRouter } from "react-router-dom";

import store from "./store";

const bookstoreService = new BookstoreService();

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <ErrorBoundry>
              <BookStoreServiceProvider value={bookstoreService}>
                  <BrowserRouter >
                      <App />
                  </BrowserRouter>
              </BookStoreServiceProvider>
          </ErrorBoundry>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
