import React, { useState } from "react";
import SomeTitle from "../components/SomeTitle";
import {
  AiFillSmile,
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineComment,
} from "react-icons/ai";

export default function LikeMyPhoto() {
  const [isLiked, setLike] = useState(false);
  const [count, setCount] = useState(0);

  const handleLike = () => {
    //if (!isLiked) {
    if (isLiked === false) {
      setLike(true);
      setCount(count + 1);
    } else {
      setLike(false);
      setCount(count - 1);
    }
  };

  return (
    <div className="container text-center">
      <SomeTitle text={"Like My Photo App"} />
      <SomeTitle classes={"subtitle"} text={`Likes ${count}`} />
      <div
        className="card card-dark m-auto"
        style={{ width: 300, cursor: "pointer" }}
      >
        <div className="card-header fs-xl">
          <AiFillSmile className="mr-2" />

          <small>Doggie Dog</small>
        </div>
        <img
          src="https://placedog.net/300/400"
          alt="img"
          style={{ height: "fit-content" }}
          onDoubleClick={handleLike}
        />
        <div
          className="card-footer fs-sl d-flex"
          style={{ justifyContent: "space-between" }}
        >
          <AiOutlineComment className="fs-xl" />
          {isLiked ? (
            <AiFillHeart className="text-danger fs-xl" onClick={handleLike} />
          ) : (
            <AiOutlineHeart className="fs-xl" onClick={handleLike} />
          )}
        </div>
      </div>
    </div>
  );
}
