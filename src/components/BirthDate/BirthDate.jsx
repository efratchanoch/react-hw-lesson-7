import React, { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../../LanguageContext.jsx";

export default function BirthDate({ birthDate }) {
    const { translate } = useContext(LanguageContext);
    const [translatedMessage, setTranslatedMessage] = useState("loading...");

    const birth = new Date(birthDate);

    const getAge = (birth) => {
        const today = new Date();
        let age = today.getFullYear() - birth.getFullYear();

        // If the birthday hasn't happened yet this year
        const monthDiff = today.getMonth() - birth.getMonth();
        const dayDiff = today.getDate() - birth.getDate();
        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
        }

        return age;
    };

    const age = getAge(birth);

    const formattedDate = birth.toLocaleDateString("en-GB");

    const message = `מזל טוב! אתה בן ${age}. תאריך הלידה שלך הוא: ${formattedDate}`;

    useEffect(() => {
        translate(message).then(setTranslatedMessage);
    }, [message, translate]);

    return <div>{translatedMessage}</div>;
}
