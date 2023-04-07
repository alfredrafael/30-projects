import React, { useState, useEffect } from "react";
import Title from "../components/SomeTitle";
import Button from "../components/Button";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";

export default function TestimonialsApp() {
  const handleClick = () => {
    console.log("clicked");
  };

  const [urlSlug, setUrlSlug] = useState("");
  const [items, setItems] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${urlSlug}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [urlSlug]);

  console.log(items);

  return (
    <>
      <div className="container m-auto">
        <Title text={"Testimonials App"} />
        <Button
          text={"Posts"}
          icon={<BsFillFileEarmarkPostFill />}
          btnClass={"btn-info"}
          onClick={() => setUrlSlug("Posts")}
        />
        <Button
          text={"Users"}
          icon={<FaUserAlt />}
          btnClass={"btn-info"}
          onClick={() => setUrlSlug("Users")}
        />
        <Button
          text={"Reviews"}
          icon={<BiCommentDetail />}
          btnClass={"btn-info"}
          onClick={() => setUrlSlug("Comments")}
        />
      </div>
      <Title
        text={!urlSlug ? "Select From above" : urlSlug}
        classes={"subtitle text-primary"}
      />
      {/* {items} */}
      {!items
        ? null
        : items.map((item) => {
            return (
              <div key={item.id} className="card card-primary mb-2">
                {item.name && <h2 className="card-header">{item.name}</h2>}
                <div className="item-body">
                  {item.title && <h4 className="mb-1">{item.title}</h4>}
                  {item.body && <p>{item.body}</p>}
                </div>
                {item.email && (
                  <small className="card-footer">{item.email}</small>
                )}
              </div>
            );
          })}
    </>
  );
}
