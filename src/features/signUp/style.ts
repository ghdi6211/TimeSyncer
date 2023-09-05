import styled from 'styled-components';

export const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const SignupForm = styled.form`
  background-color: #ffffff;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

export const InputGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: inline-block;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #1a73e8;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #155a8a;
  }
`;
