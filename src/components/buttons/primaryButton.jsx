import React from "react";
import "./primaryButton.css";

export default function PrimaryButton({ type, children, onClick }) {
  return (
    <>
      <button className="button" type={type} onClick={onClick}>
        <b>{children}</b>
      </button>
    </>
  );
}
