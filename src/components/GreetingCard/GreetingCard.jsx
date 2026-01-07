import React, { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../../LanguageContext.jsx";

export default function GreetingCard({ greeting }) {
    const { translate, language } = useContext(LanguageContext);
    const [translatedMessage, setTranslatedMessage] = useState("loading...");

    useEffect(() => {
        translate(greeting).then(setTranslatedMessage);
    }, [greeting, language, translate]);

    return (
        <div className="greeting-card">
            {translatedMessage}
        </div>
    );
}
