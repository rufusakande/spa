import React, { useState } from "react";

function Contact() {
    const [inputValue, setInputValue] = useState("");
    const [displayedValue, setDisplayedValue] = useState("");

    const handleInputChange = (e) => setInputValue(e.target.value);

    const handleClick = () => setDisplayedValue(inputValue);
    return (
        <div>
            <h2>Input </h2>
            <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Entrez un texte" />
            <button onClick={handleClick}>Envoyez</button>
            <div>{displayedValue && <p>{displayedValue}</p>}</div>
        </div>
    );
}

export default Contact;