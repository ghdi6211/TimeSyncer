import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const LoginBox = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  width: 400px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.img`
  display: block;
  margin: 0 auto 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  width: 100%;
  background-color: #1a73e8;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #155a8a;
  }
`;

export const RecoveryLinks = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
`;
