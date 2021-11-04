import React from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.css';

function Section({
  title = '',
  children,
}) {
  return (
    <>
      <h1 className={s.tn}>{title}</h1>
      {children}
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
