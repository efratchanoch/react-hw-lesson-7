import React from 'react';

import ChooseLanguage from './components/ChooseLanguage/ChooseLanguage.jsx';
import BirthDate from './components/BirthDate/BirthDate.jsx';
import GreetingsList from './components/GreetingsList/GreetingsList.jsx'; 

function App() {
  return (
    <>
      <ChooseLanguage />
      <BirthDate />
      <GreetingsList />
    </>
  );
}


export default App
