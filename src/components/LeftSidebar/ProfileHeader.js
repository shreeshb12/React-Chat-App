import React from "react";

function ProfileHeader({ user }) {
  return (
    <>
      <div className="header">
      <a href="https://github.com/shreeshb12" target="_blank"> <img className="avatar" src={user.image} alt="profile-pic" /></a>
        <p>{user.name}</p>
      </div>
    </>
  );
}

export default ProfileHeader;
