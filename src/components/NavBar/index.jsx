import React from "react";

import UserBadge from "../UserBadge";
import "./styles.css";

const NavBar = ({ nickName, avatarUrl, id }) => {
  return (
    <div className="cnNavbarRoot">
      <div className="cnNavbarWrapper">
        <a href="/" className="cnNavbarLink">
          Insta
        </a>
        <UserBadge nickName={nickName} avatarUrl={avatarUrl} id={id} />
      </div>
    </div>
  );
};

export default NavBar;
