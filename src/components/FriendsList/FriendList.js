import React from "react";
import PropTypes from "prop-types";
import s from "./FriendList.module.scss";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={s.item}>
    <span
      className={isOnline ? s.status + ` ${s.online}` : s.status}
    ></span>
    <img className={s.avatar} src={avatar} alt={name} width="48" />
    <p className={s.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

FriendListItem.defaultProps = {
  isOnline: false,
};

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