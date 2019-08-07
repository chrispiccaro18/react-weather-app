import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% {
      background-color: blue;
      margin-left: 0;
      margin-top: 0;
    }
    50% {
      background-color: violet;
      margin-top: -50px;
    }
    100% {
      background-color: blue;
      margin-left: 0;
      margin-top: 0;
    }
  `;

const LoadingDiv1 = styled.div`
  background-color: blue;

  margin: 20px;

  height: 100px;
  width: 100px;

  border-radius: 50%;

  animation: ${spin} 1.5s ease-in-out infinite;
`;

const LoadingDiv2 = styled.div`
  background-color: blue;

  margin: 20px;

  height: 100px;
  width: 100px;

  border-radius: 50%;

  animation: ${spin} 1.5s ease-in-out infinite .25s;
`;

const LoadingDiv3 = styled.div`
  background-color: blue;

  margin: 20px;

  height: 100px;
  width: 100px;

  border-radius: 50%;

  animation: ${spin} 1.5s ease-in-out infinite .5s;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  
  margin-top: 60px;

`;


export default function Loading() {
  return (
    <LoadingContainer>
      <LoadingDiv1 />
      <LoadingDiv2 />
      <LoadingDiv3 />
    </LoadingContainer>
  );
}
