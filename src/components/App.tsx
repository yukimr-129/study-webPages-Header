import React, { useCallback, useState } from 'react';
// import '../App.css';

import { sliderData } from '../data/SliderData';
import GlobalStyle from '../styles/globalStyles';
import { Dropdown } from './Dropdown';
import { Hero } from './Hero';
import { Navbar } from './Navbar';


const App = () => {

  //スマホ　メニュー開閉
  const [isOpen, setIsOpen] = useState(false)

  const toggle = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={sliderData} />
    </>
  );
}

export default App;
