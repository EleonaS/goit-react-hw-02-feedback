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
      {Object.keys(options).map(
        option => (
          <button
            key={option}
            type="button"
            className={s.btn}
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {option}
          </button>
        ),
      )}
    </div>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback:
    PropTypes.func.isRequired,
};

export default FeedbackOptions;
