import cn from "classnames";
import React, { useState } from "react";

import Comment from "../Comment";
import UserBadge from "../UserBadge";
import "./styles.css";

const DetailedCard = ({
  userName,
  avatarUrl,
  userId,
  imgUrl,
  likes,
  isLikedByYou,
  comments,
  className,
  onLikeClick,
  id,
}) => {
  const [isCommentsShown, setIsCommentsShown] = useState(false);

  const renderComments = () => {
    if (comments.length > 2 && !isCommentsShown) {
      const commentsCopy = [...comments];
      const commentsForRender = commentsCopy.splice(comments.length - 2, 2);

      return (
        <>
          <span
            className="cnDetailedCardCommentTitle"
            onClick={() => setIsCommentsShown(true)}
          >{`Show more ${
            comments.length - commentsForRender.length
          } comments`}</span>
          {commentsForRender.map((comment) => (
            <Comment {...comment} key={Math.random() * 5000} />
          ))}
        </>
      );
    }
    return comments.map((comment) => (
      <Comment {...comment} key={Math.random() * 5000} />
    ));
  };

  return (
    <div className={cn("cnDetailedCardRoot", className)}>
      <div className="cnDetailedCardHeader">
        <UserBadge nickName={userName} avatarUrl={avatarUrl} id={userId} />
      </div>
      <div>
        <img src={imgUrl} alt="img" className="cnDetailedCardImg" />
      </div>
      <div className="cnDetailedCardButtons">
        <i
          onClick={() => onLikeClick(id)}
          className={`${
            isLikedByYou ? "fas" : "far"
          } fa-heart cnDetailedCardLikeIcon`}
        />
        <i className="fas fa-comment cnDetailedCardLikeComment" />
      </div>
      <div className="cnDetailedCardLikes">{`Likes ${likes} people`}</div>
      <div className="cnDetailedCardComments">{renderComments()}</div>
      <textarea className="cnDetailedCardTextArea" />
    </div>
  );
};

export default DetailedCard;
