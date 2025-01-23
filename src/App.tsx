import React from 'react';
import logo from './logo.svg';
import styled from '@emotion/styled';

const Container = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AppLogo = styled.img`
  height: 20vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

function App() {
  return (
    <Container>
      <Header>
        <AppLogo src={logo} alt='logo'></AppLogo>
        <p></p>
      </Header>
      <div className='App'>
        <h1>Hello, React with TypeScript!</h1>
      </div>
    </Container>
  );
}

export default App;
