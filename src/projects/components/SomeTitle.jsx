import React from "react";

export default function SomeTitle({ text, classes }) {
  return (
    <h1 className={!classes ? "title text-center" : classes}>
      {!text ? "Sin título" : text}
    </h1>
  );
}
