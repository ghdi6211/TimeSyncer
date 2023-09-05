/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../app/slice';
import * as Styled from './style';

const LoginTemplate: React.FC = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // dispatch(login({ username, password }));
  };

  return (
    <Styled.Wrapper>
      <Styled.LoginBox>
        <Styled.Form onSubmit={handleLogin}>
          <Styled.Input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Styled.Input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Styled.Button type='submit'>Sign in</Styled.Button>
        </Styled.Form>
        <Styled.RecoveryLinks>
          <a href='/forgot-username'>Forgot username?</a>
          <a href='/forgot-password'>Forgot password?</a>
        </Styled.RecoveryLinks>
      </Styled.LoginBox>
    </Styled.Wrapper>
  );
};

export default LoginTemplate;
