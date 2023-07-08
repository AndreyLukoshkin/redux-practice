import { useEffect } from "react";
import ReactModal from "react-modal";

import UserBadge from "../UserBadge";
import "./styles.css";

const PhotoModal = ({
  isOpen,
  onClose,
  imgUrl,
  userName,
  avatarUrl,
  userId,
  comments,
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
          <img src={imgUrl} alt={imgUrl} className="cnModalImg" />
        </div>
        <div className="cnModalCommentsBlock">
          <div>
            <UserBadge nickName={userName} avatarUrl={avatarUrl} id={userId} />
          </div>

          <div>
            {comments.map((comment) => (
              <div></div>
            ))}
          </div>
          <div>
            <div className="cnModalIcons">
              <i className="fa fa-heart" />
              <i />
            </div>
            <textarea />
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default PhotoModal;
