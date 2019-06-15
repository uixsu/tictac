import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import MainRouter from './routes';

export default function App() {
  return (
    <Provider store={store}>
      <MainRouter />
    </Provider>
  );
}
