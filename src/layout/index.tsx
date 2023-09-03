import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../app/store';
import Header from '../components/GlobalHearder/Header';
import Router from '../routes/Router';

const Main: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </Provider>
  );
};

export default Main;
