import React from "react";

export default function Button({ icon, text, btnClass, onClick }) {
  return (
    <button className={`btn ${btnClass}`} onClick={onClick}>
      {!icon ? "" : icon} {!text ? "click" : text}
    </button>
  );
}
