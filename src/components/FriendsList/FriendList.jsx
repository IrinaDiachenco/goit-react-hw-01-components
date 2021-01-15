import React from "react";
import PropTypes from "prop-types";
import s from "./FriendList.module.scss";
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => (
  <ul className={s.friendList}>
    {friends.map((friend) => (
      <FriendListItem key={friend.id} {...friend} />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;