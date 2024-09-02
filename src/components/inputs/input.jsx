import React, { useState } from "react";
import "./input.css";
import openEye from "./eye.svg";
import closeEye from "./eye-off.svg";

export default function Input({
  title = "default", // Label for the input field
  type = "text", // Type of the input, default is "text"
}) {
  const [isPassProtected, setIsPassProtected] = useState(true); // State to toggle password visibility

  // Toggle the eye icon based on password visibility
  const passProtection = isPassProtected ? (
    <img src={closeEye} alt="close" />
  ) : (
    <img src={openEye} alt="open" />
  );

  const handlePassProtectionOnDown = () => {
    setIsPassProtected(false); // Show the password when the mouse is pressed down
  };

  const handlePassProtectionOnUp = () => {
    setIsPassProtected(true); // Hide the password when the mouse is released
  };

  const [inputValue, setInputValue] = useState(""); // State to track the input field's value
  const handleInputValueOnChange = (e) => setInputValue(e.target.value); // Update state when the input value changes

  return (
    <>
      <div className="label">
        <span>{title}</span> {/* Display the input field label */}
        <div>
          <input
            className="input"
            type={isPassProtected ? type : "text"} // Toggle between password and text input types
            value={inputValue} // Bind the input value to the state
            onChange={handleInputValueOnChange} // Handle changes in the input field
          />
          {type === "password" && (
            <button
              className="eye"
              type="button"
              onMouseDown={handlePassProtectionOnDown} // Show password on mouse down
              onMouseUp={handlePassProtectionOnUp} // Hide password on mouse up
            >
              {passProtection}
            </button>
          )}
        </div>
      </div>
    </>
  );
}
