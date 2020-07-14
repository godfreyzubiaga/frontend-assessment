import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border-radius: 20px;
  border: 3px solid #333;
  box-sizing: border-box;
  padding: 10px 20px;

  background: none;
  color: #333;

  font-size: 15px;
  font-weight: bold;

  transition-duration: 0.3s;
  cursor: pointer;

  &:active,
  &:focus {
    outline: none;
  }

  &:hover {
    background: #333;
    color: white;
    transition-duration: 0.3s;
  }
`;

const Button = ({ name, buttonAction }) => (
  <StyledButton onClick={() => buttonAction()}>{name}</StyledButton>
);

export default Button;
