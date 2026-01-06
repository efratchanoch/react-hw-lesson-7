import React from "react";
import GreetingCard from "../GreetingCard/GreetingCard.jsx";
import { useContext } from "react";
import { LanguageContext } from "../../LanguageContext.jsx";

export default function GreetingsList({ greetings }) {
    const { lenguage } = useContext(LanguageContext);

    return (
        <div>
            {greetings.map((greeting, index) => (
                <GreetingCard key={index} greeting={greeting} />
            ))}
        </div>
    );
}
