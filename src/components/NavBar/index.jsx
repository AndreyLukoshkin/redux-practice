import React from "react";

import UserBadge from "../UserBadge";
import "./styles.css";

const NavBar = ({ nickName, avatarUrl, id }) => {
  return (
    <div className="cnNavbarRoot">
      <div className="cnNavbarWrapper">
        <span>insta</span>
        <UserBadge nickName={nickName} avatarUrl={avatarUrl} id={id} />
      </div>
    </div>
  );
};

export default NavBar;
