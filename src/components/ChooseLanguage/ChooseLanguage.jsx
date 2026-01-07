import React, { useContext, useEffect } from "react";
import { LanguageContext } from "../../LanguageContext.jsx";
import { useState } from "react";

export default function ChooseLanguage() {
    const { language, changeLanguage, translate } = useContext(LanguageContext);
    const [translatedMessage, setTranslatedMessage] = useState("loading...");

    const message = "בחרי שפה";

    const languages = {
        hebrew: { label: "עברית", dir: "rtl" },
        english: { label: "English", dir: "ltr" },
        french: { label: "Français", dir: "ltr" }
    };

    useEffect(() => {
        translate(message).then(setTranslatedMessage);
    }, [message, translate]);

    useEffect(() => {
        const langDir = languages[language]?.dir || "ltr";
        document.documentElement.dir = langDir;
    }, [language]);

    return (
        <div>
            <label>{translatedMessage}: </label>
            <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
                <option value="hebrew">{languages["hebrew"].label}</option>
                <option value="english">{languages["english"].label}</option>
                <option value="french">{languages["french"].label}</option>
            </select>
        </div>
    );
};

