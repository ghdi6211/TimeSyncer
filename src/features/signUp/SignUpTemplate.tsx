import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './style';

const SignupTemplate: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    userId: '',
    password: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission logic here (e.g., call an API endpoint)
    navigate('/login');
  };

  return (
    <Styled.SignupContainer>
      <Styled.SignupForm onSubmit={handleSubmit}>
        <Styled.InputGroup>
          <Styled.Label>Username</Styled.Label>
          <Styled.Input
            type='text'
            name='username'
            value={formData.username}
            onChange={handleChange}
            required
          />
        </Styled.InputGroup>
        <Styled.InputGroup>
          <Styled.Label>User ID</Styled.Label>
          <Styled.Input
            type='text'
            name='userId'
            value={formData.userId}
            onChange={handleChange}
            required
          />
        </Styled.InputGroup>
        <Styled.InputGroup>
          <Styled.Label>Password</Styled.Label>
          <Styled.Input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Styled.InputGroup>
        <Styled.InputGroup>
          <Styled.Label>Email</Styled.Label>
          <Styled.Input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Styled.InputGroup>
        <Styled.SubmitButton type='submit'>Sign Up</Styled.SubmitButton>
      </Styled.SignupForm>
    </Styled.SignupContainer>
  );
};

export default SignupTemplate;
