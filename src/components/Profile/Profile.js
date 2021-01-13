import React from "react";
import PropTypes from "prop-types";
//import imagePlaceholder from "../../img/notImage.png";
import s from "./Profile.module.scss";

const Bio = ({ avatar, name, tag, location }) => (
  <div className={s.description}>
    <img src={avatar} alt="Аватар пользователя" className={s.avatar} />
    <p className={s.name}>{name}</p>
    <p className={s.tag}>@{tag}</p>
    <p className={s.location}>{location}</p>
  </div>
);

Bio.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

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
  stats: PropTypes.object.isRequired,
};

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className={s.profile}>
    <Bio name={name} tag={tag} location={location} avatar={avatar} />
    <Stats stats={stats} />
  </div>
);

export default Profile;