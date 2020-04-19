import React from 'react';
import { render } from 'react-dom';
import RatingBar from './ratingbar';
import './style.css';

const props = {
  max: 10
};
render(<RatingBar {...props}/>, document.getElementById('root'));

