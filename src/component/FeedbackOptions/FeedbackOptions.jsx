import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

//
//{options.map(({ label, color }, index) => (
//<button
//key={label}
//className={this.makeOptionClassName(index)}
//style={{ backgroundColor: color }}
//onClick={() => this.setActiveIdx(index)}
//></button>

function FeedbackOptions({
  options,
  onLeaveFeedback,
}) {
  return (
    <div>
      {Object.keys(options).map(key => (
        <button
          key={key}
          type="button"
          className={s.btn}
          onClick={() => {
            onLeaveFeedback(key);
          }}
        >
          {`${key}`}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  /* buttons: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,*/
  options: PropTypes.object.isRequired,
  onLeaveFeedback:
    PropTypes.func.isRequired,
};

export default FeedbackOptions;
