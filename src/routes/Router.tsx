import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/Login/Login';
import SignupPage from '../pages/Singup/Signup';
import TopPage from '../pages/Top/Top';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<TopPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
    </Routes>
  );
};

export default Router;
