import cn from "classnames";
import React, { useState } from "react";

import ImageWithLoader from "../ImageWithLoader";
import PhotoModal from "../PhotoModal";
import "./styles.css";

const Card = ({
  imgUrl,
  className,
  likes,
  comments,
  isLikedByYou,
  onLikeClick,
  onCommentSubmit,
  id,
  userData,
  isMutateLoading,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [comment, setComment] = useState("");

  return (
    <div className={cn("cnCardRoot", className)}>
      <ImageWithLoader className="cnCardImage" src={imgUrl} alt={imgUrl} />
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
        <i
          className={cn("fas fa-comment", "cnCardIcon")}
          onClick={() => setIsModalVisible(true)}
        />
        <span className="cnCardNumber">{comments.length}</span>
      </div>
      <PhotoModal
        comments={comments}
        onClose={() => setIsModalVisible(false)}
        isOpen={isModalVisible}
        {...userData}
        commentValue={comment}
        setCommentValue={setComment}
        onCommentSubmit={() => onCommentSubmit(comment)}
        isCommentLoading={isMutateLoading}
        imgUrl={imgUrl}
        isLikedByYou={isLikedByYou}
        onLikeClick={() => onLikeClick(id)}
      />
    </div>
  );
};

export default Card;
