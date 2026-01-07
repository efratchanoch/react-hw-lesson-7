import React from 'react';

import { LanguageProvider } from './LanguageContext.jsx';
import ChooseLanguage from './components/ChooseLanguage/ChooseLanguage.jsx';
import BirthDate from './components/BirthDate/BirthDate.jsx';
import GreetingsList from './components/GreetingsList/GreetingsList.jsx';

export default function App() {
  const myGreetings = [
    "מזל טוב!",
    "יום הולדת שמח!",
    "שכל הברכות יכולו על ראשך!"
  ];

  return (
    <LanguageProvider>
      <h2>Birthday App</h2>
      <ChooseLanguage />
      <BirthDate birthDate={new Date("2006-10-08")} />
      <GreetingsList greetings={myGreetings} />
      <p>by Efrat Chanoch</p>
    </LanguageProvider>
  );
}


