import cn from "classnames";
import React, { useState } from "react";

import Button from "../Button";
import Comment from "../Comment";
import PhotoModal from "../PhotoModal";
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
  onCommentSendClick,
  mutateLoading,
}) => {
  const [isCommentsShown, setIsCommentsShown] = useState(false);
  const [comment, setComment] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSendCommentClick = () => {
    if (comment) {
      onCommentSendClick(id, comment);
      setComment("");
    }
  };

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
        <i
          className="fas fa-comment cnDetailedCardLikeComment"
          onClick={() => setIsModalVisible(true)}
        />
      </div>
      <div className="cnDetailedCardLikes">{`Likes ${likes} people`}</div>
      <div className="cnDetailedCardComments">{renderComments()}</div>
      <div className="cnDetailedCardTextAreaWrapper">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="write comment"
          className="cnDetailedCardTextArea"
        />
        <Button
          disabled={mutateLoading}
          className="cnDetailedCardSendButton"
          onClick={handleSendCommentClick}
        >
          Comment
        </Button>
      </div>
      <PhotoModal
        comments={[]}
        onClose={() => setIsModalVisible(false)}
        isOpen={isModalVisible}
        userName={userName}
        avatarUrl={avatarUrl}
        userId={userId}
      />
    </div>
  );
};

export default DetailedCard;
