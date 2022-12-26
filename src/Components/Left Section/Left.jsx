import React from "react";
import { Profile } from "./Profile";
import ProfileDetails from "./ProfileDetails";

const Left = () => {
  return (
    <div className="left">
      <Profile />
      <ProfileDetails />
    </div>
  );
};
export default Left;
