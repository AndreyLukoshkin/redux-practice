import cn from "classnames";
import React from "react";

import "./styles.css";

const Card = ({
  imgUrl,
  className,
  likes,
  comments,
  isLikedByYou,
  onLikeClick,
}) => {
  return (
    <div className={cn("cnCardRoot", className)}>
      <img src={imgUrl} alt={imgUrl} className="cnCardImage" />
      <div className="cnCardHover" />
      <div className="cnCardIcons">
        <i
          onClick={onLikeClick}
          className={cn(
            `${isLikedByYou ? "fa" : "far"} fa-heart`,
            "cnCardIcon"
          )}
        />
        <span className="cnCardNumber cnCardLikes">{likes}</span>
        <i className={cn("fas fa-comment", "cnCardIcon")} />
        <span className="cnCardNumber">{comments}</span>
      </div>
    </div>
  );
};

export default Card;
