import React from "react";

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
}) => {
  return (
    <div className="cnUserBioRoot">
      <div>
        <img className="cnUserBioAvatar" src={avatarUrl} alt="avatar" />
      </div>
      <div className="cnUserBioInfo">
        <div className="cnUserBioRow">
          <span className="cnUserBioNickname">{nickname}</span>
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
