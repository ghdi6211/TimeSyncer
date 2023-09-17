/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../app/slice';
import * as Styled from './style';
import axios from 'axios';

const LoginTemplate: React.FC = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    if (msg) {
      setTimeout(() => {
        setMsg('');
        setLoading(false);
      }, 1500);
    }
  }, [msg]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username) {
      return alert('ID를 입력하세요.');
    }
    else if (!password) {
      return alert('Password를 입력하세요.');
    }
    else {

      const body = {
        username,
        password
      };

      axios.post('http://localhost:5003/user/login', body, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);

        if (res.data.code === 200) {
          console.log('로그인');
          dispatch(loginUser(res.data.userInfo));
          setMsg('');
        }
        if (res.data.code === 400) {
          setMsg('Username, Password가 비어있습니다.');
        }
        if (res.data.code === 401) {
          setMsg('존재하지 않는 User입니다.');
        }
        if (res.data.code === 402) {
          setMsg('password가 틀립니다.');
        }
      });
    }
    setLoading(true);
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
          <Styled.Button type='submit' disabled={loading}>Sign in</Styled.Button>
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
