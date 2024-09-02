import React from "react";
import "./textButton.css";

export default function textButton({ link, children, onClick }) {
  return (
    <>
      <a className="txtBtn" href={link} onClick={onClick}>
        {children}
      </a>
    </>
  );
}
