import React from 'react';
import '../App.css';
import GlobalStyle from '../styles/globalStyles';
import { Hero } from './Hero';
import { Navbar } from './Navbar';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero />
    </>
  );
}

export default App;
