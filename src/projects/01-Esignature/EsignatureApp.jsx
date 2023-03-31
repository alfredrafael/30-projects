import React, { useState } from "react";
import SomeTitle from "../components/SomeTitle";

export default function EsignatureApp() {
  const [name, setName] = useState("Hardcoded default");
  const [date, setDate] = useState("Hardcoded date value");

  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const inputStyle = {
    border: "none",
    borderBottom: "2px dotted",
    outline: "none",
    padding: ".35rem 0",
  };

  document.body.style.background = "#eee";

  return (
    <div className="container text-center">
      <SomeTitle classes={"title"} text={name} />
      <SomeTitle
        classes={"main-title"}
        text={!date ? "Fecha de Nacimiento" : date}
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime atque
        alias eveniet saepe, fugit asperiores vitae quisquam magni recusandae ut
        voluptatem consequatur, eius nostrum quos accusamus similique tempore,
        reiciendis repellat!
      </p>
      <footer
        className="d-flex"
        style={{
          justifyContent: "space-around",
          position: "relative",
          top: "40vh",
        }}
      >
        <input
          type="date"
          value={date}
          style={inputStyle}
          onChange={handleDateChange}
        />
        <input
          type="text"
          value={name}
          style={inputStyle}
          onChange={handleNameChange}
        />
      </footer>
    </div>
  );
}
