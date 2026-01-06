import React, { useContext } from "react";
import { LanguageContext } from "../../LanguageContext.jsx";

export default function ChooseLanguage() {
    const { language, changeLanguage } = useContext(LanguageContext);

    const languages = {
        hebrew: "עברית",
        english: "English",
        french: "Français"
    };

    return (
        <div>
            <h3>בחרי שפה:</h3>
            <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
                <option value="hebrew">{languages["hebrew"]}</option>
                <option value="english">{languages["english"]}</option>
                <option value="french">{languages["french"]}</option>
            </select>

            <p>השפה הנוכחית: {languages[language]}</p>
        </div>
    );
};

