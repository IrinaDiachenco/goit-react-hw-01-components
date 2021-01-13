import React from "react";
import PropTypes from "prop-types";
import s from "./Statistics.module.scss";

const StatsItem = ({ fileType, percentage }) => (
  <li className={s.item}>
    <span className={s.label}>{fileType}</span>
    <span className={s.percentage}>{percentage}%</span>
  </li>
);

StatsItem.propTypes = {
  fileType: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

const Stats = ({ data }) => (
  <ul className={s["stat-list"]}>
    {data.map((stat) => (
      <StatsItem
        key={stat.id}
        fileType={stat.label}
        percentage={stat.percentage}
      />
    ))}
  </ul>
);

const Statistics = ({ title, data }) => (
  <section className={s.statistics}>
    <h2 className={s.title}>{title}</h2>
    <Stats data={data} />
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array.isRequired,
};

Statistics.defaultProps = {
  title: "",
};

export default Statistics;