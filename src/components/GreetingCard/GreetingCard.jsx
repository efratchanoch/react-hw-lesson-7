import React from "react";
import "./GreetingCard.css";

export default function GreetingCard({ greeting }) {
  return (
    <div className="greeting-card">
      {greeting}
    </div>
  );
}
