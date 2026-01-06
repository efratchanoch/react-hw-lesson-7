import React from "react";
import GreetingCard from "../GreetingCard/GreetingCard.jsx";

export default function GreetingsList({ greetings }) {
  return (
    <div>
      {greetings.map((greeting, index) => (
        <GreetingCard key={index} greeting={greeting} />
      ))}
    </div>
  );
}
