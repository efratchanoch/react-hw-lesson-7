import React from 'react';

import { LanguageProvider } from './LanguageContext.jsx';
import ChooseLanguage from './components/ChooseLanguage/ChooseLanguage.jsx';
import BirthDate from './components/BirthDate/BirthDate.jsx';
import GreetingsList from './components/GreetingsList/GreetingsList.jsx';

function App() {
  return (
    <LanguageProvider>
      <ChooseLanguage />
      <BirthDate birthDate={new Date("2006-10-08")} />
      <GreetingsList />
    </LanguageProvider>
  );
}


export default App
