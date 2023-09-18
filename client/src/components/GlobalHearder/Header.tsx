import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../app/slice';
import { RootState } from '../../app/store';
import * as Styled from './style';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn, username } = useSelector((state: RootState) => state.auth);

  return (
    <Styled.HeaderWrapper>
      <Styled.ProjectName onClick={() => navigate('/')}>TimeSyncer</Styled.ProjectName>
      <Styled.AuthSection>
        {isLoggedIn ? (
          <>
            <span>Hello, {username}!</span>
            <Styled.AuthButton onClick={() => dispatch(logoutUser())}>Logout</Styled.AuthButton>
          </>
        ) : (
          <>
            <Styled.AuthButton onClick={() => navigate('/login')}>Login</Styled.AuthButton>
            <Styled.AuthButton onClick={() => navigate('/signup')}>Sign Up</Styled.AuthButton>
          </>
        )}
      </Styled.AuthSection>
    </Styled.HeaderWrapper>
  );
};

export default Header;
