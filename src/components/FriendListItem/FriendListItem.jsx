import React from "react";
import PropTypes from "prop-types";
import s from "./FriendListItem.module.scss";

const FriendListItem = ({ id, avatar, name, isOnline }) => (
    <li key={id} className={s.item}>
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

export default FriendListItem;