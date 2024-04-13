import React from 'react';
import {Menu,About ,Infocard,Research, Teaching} from './components/index'
import Bgeff from './components/bgeffect/Bgeff';
import MathComponent from './components/MathComponent'
import './App.css';

function App() {
  
  return (
    <div className="App">
     <Bgeff />
      <div className='row'>
      <Menu />
      <Infocard />
      <div className='content col-11 col-sm-10 col-lg-6 col-md-8 h-100 p-0'>
        <About />
        <Research />
        <Teaching /> 
      </div>  
      <MathComponent code=''/>
      </div>
    </div>
  );
}

export default App;
