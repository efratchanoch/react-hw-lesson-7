import React from "react";

export default function BirthDate({ birthDate }) {
    const { language } = useContext(LanguageContext);
    
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

    return (
        <div>
            <p>
                מזל טוב! אתה בן {age}. תאריך הלידה שלך הוא: {formattedDate}
            </p>
        </div>
    );
}
