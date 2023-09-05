import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1a73e8;
  padding: 10px 20px;
  color: white;
`;

export const ProjectName = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
`;

export const AuthSection = styled.div`
  display: flex;
  gap: 15px;
`;

export const AuthButton = styled.button`
  background-color: transparent;
  border: 1px solid white;
  padding: 5px 10px;
  border-radius: 4px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: #1a73e8;
  }
`;
