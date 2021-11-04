import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({
  good,
  neutral,
  bad,
  total = 0,
  positivePercentage = 0,
}) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total} </p>
      <p className={s.bbb}>
        Positive feedback:
        {positivePercentage} %
      </p>
    </div>
  );
};
/*const renderStatistics = function (options) {
  return Object.keys(options).map(key => (
    <p key={key}>
      {key}: {options[key]}
    </p>
  ));*/

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage:
    PropTypes.number.isRequired,
};

export default Statistics;
