import React, { useCallback, useState } from 'react';
import { CardData1, CardData2 } from '../data/CardData';
import { InfoData } from '../data/InfoData';

import { sliderData } from '../data/SliderData';
import GlobalStyle from '../styles/globalStyles';
import { Cards } from './Cards ';
import { Dropdown } from './Dropdown';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { InfoSection } from './InfoSection';
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
      <InfoSection InfoData={InfoData}/>
      <Cards CardData1={CardData1} CardData2={CardData2}/>
      <Footer />
    </>
  );
}

export default App;
