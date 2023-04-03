import React from "react";

export default function SomeTitle({ text, classes }) {
  return (
    <h1 className={!classes ? "title" : classes || "title text-center"}>
      {!text ? "Sin título" : text}
    </h1>
  );
}
