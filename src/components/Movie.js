import React from 'react';
import { connect } from 'react-redux';
import { moviesSelector } from '../selector';
import get from 'lodash/get';

const Movies = ({ items }) => (
  <div>
    {items.map((item, idx) => {
    <p>{get(item, 'data.title', '')}</p>
    })}
  </div>
);

export default connect(
  state => ({ items: moviesSelector(state) }),
  {}
)(Movies);
