import React from "react";
import PropTypes from "prop-types";
import s from "./Profile.module.scss";

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className={s.profile}>
    <Profile name={name} tag={tag} location={location} avatar={avatar} />
    <Stats stats={stats} />
  </div>
);

const Stats = ({ stats }) => (
  <ul className={s.stats}>
    <li>
      <span className={s.label}>Followers</span>
      <span className={s.quantity}>{stats.followers}</span>
    </li>
    <li>
      <span className={s.label}>Views</span>
      <span className={s.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={s.label}>Likes</span>
      <span className={s.quantity}>{stats.likes}</span>
    </li>
  </ul>
);

Stats.propTypes = {
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};



export default Profile;