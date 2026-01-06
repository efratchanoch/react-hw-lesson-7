import React from "react";
import "./GreetingCard.css";
import { useContext } from "react";
import { LanguageContext } from "../../LanguageContext.jsx";

export default function GreetingCard({ greeting }) {
    const { language } = useContext(LanguageContext);

    return (
        <div className="greeting-card">
            {greeting}
        </div>
    );
}
