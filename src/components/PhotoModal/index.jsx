import { nanoid } from "nanoid";
import { useEffect } from "react";
import ReactModal from "react-modal";

import Comment from "../Comment";
import ImageWithLoader from "../ImageWithLoader";
import TextArea from "../TextArea";
import UserBadge from "../UserBadge";
import "./styles.css";

const PhotoModal = ({
  isOpen,
  onClose,
  imgUrl,
  userName,
  userId,
  avatarUrl,
  comments,
  commentValue,
  setCommentValue,
  onCommentSubmit,
  isCommentLoading,
  isLikedByYou,
  onLikeClick,
}) => {
  useEffect(() => {
    const body = document.querySelector("body");
    if (isOpen) {
      body.classList.add("cnBodyOverflow");
    } else {
      body.classList.remove("cnBodyOverflow");
    }
  }, [isOpen]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="cnModal"
      overlayClassName="cnModalOverlay"
      ariaHideApp={false}
    >
      <div className="cnModalRoot">
        <div className="cnModalImgWrapper">
          <ImageWithLoader src={imgUrl} alt={imgUrl} className="cnModalImg" />
        </div>
        <div className="cnModalCommentsBlock">
          <div>
            <div className="cnModalHeader">
              <UserBadge
                nickName={userName}
                avatarUrl={avatarUrl}
                id={userId}
              />
            </div>

            <div className="cnModalComments">
              {comments.map((comment) => (
                <Comment {...comment} key={nanoid()} />
              ))}
            </div>
          </div>

          <div>
            <div className="cnModalIcons">
              <i
                onClick={onLikeClick}
                className={`${
                  isLikedByYou ? "fa" : "far"
                } fa-heart cnModalLikeIcon`}
              />
            </div>
            <TextArea
              value={commentValue}
              onChange={setCommentValue}
              placeholder="write comment"
              buttonText="Send"
              onSubmit={onCommentSubmit}
              isLoading={isCommentLoading}
            />
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default PhotoModal;
