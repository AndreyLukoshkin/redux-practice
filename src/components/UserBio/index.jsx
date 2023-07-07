import React, { useEffect, useState } from "react";

import Button from "../Button";
import UserCounter from "../UserCounter";
import "./styles.css";

const UserBio = ({
  avatarUrl,
  nickname,
  subscribed,
  subscribers,
  firstName,
  lastName,
  description,
  url,
  isMyPage,
  isSubscribed,
}) => {
  const [btnProps, setBtnProps] = useState({
    onClick: () => false,
    children: "Subscribe",
  });

  useEffect(() => {
    if (isMyPage) {
      setBtnProps({ onClick: () => false, children: "Edit" });
    } else if (isSubscribed) {
      setBtnProps({ onClick: () => false, children: "Unsubscribe" });
    } else {
      setBtnProps({ onClick: () => false, children: "Subscribe" });
    }
  }, [isMyPage, isSubscribed]);

  return (
    <div className="cnUserBioRoot">
      <div>
        <img className="cnUserBioAvatar" src={avatarUrl} alt="avatar" />
      </div>
      <div className="cnUserBioInfo">
        <div className="cnUserBioRow">
          <span className="cnUserBioNickname">{nickname}</span>
          <Button {...btnProps} />
        </div>
        <div className="cnUserBioRow">
          <UserCounter count={5} text="Posts" className="cnUserBioCounter" />
          <UserCounter
            count={subscribed}
            text="Followers"
            className="cnUserBioCounter"
          />
          <UserCounter
            count={subscribers}
            text="Subscribes"
            className="cnUserBioCounter"
          />
        </div>
        <div className="cnUserBioRow">
          <span className="cnUserBioName">
            {firstName} {lastName}
          </span>
        </div>
        <div className="cnUserBioRow">
          <span>{description}</span>
        </div>
        <a href={url}>{url}</a>
      </div>
    </div>
  );
};

export default UserBio;
