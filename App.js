import React from 'react';
import { Provider } from 'react-redux';
import store from './app/redux/store'
import AppRoute from './app/router';

const App = () => {
  return (
    <Provider store={store}>
      <AppRoute/>
    </Provider>
  )
}

export default App;
