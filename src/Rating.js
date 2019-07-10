import React from 'react';
import PropTypes from 'prop-types';
import reduce from 'lodash/reduce';

import StarEmpty from '../assets/icon-star-empty.svg';
import StarHalfEmpty from '../assets/icon-half-empty.svg';
import StarFull from '../assets/icon-star.svg';

const Ratings = ({ rating, empty, half, full, ratingsStyle }) => (
  <div>
    {reduce([1, 2, 3, 4, 5], (last, index) => {
      if (index === Math.ceil(rating) && rating % 1 > 0) {
        const round = Math.round(rating * 2) / 2;
        if (round % 1 === 0.5) {
          last.push(<img src={half} alt="LogoHalfFull" style={{ height: 17, ...ratingsStyle }} key={index}/>);
        } else last.push(<img src={(round > rating) ? full : empty} alt="LogofFull" style={{ height: 17, ...ratingsStyle }} key={index} />);
      } else last.push(<img src={(index <= rating) ? full : empty} alt="Logo" style={{ height: 17, ...ratingsStyle }} key={index} />);
      return last;
    }, [])}
  </div>
);

Ratings.propTypes = {
  empty: PropTypes.any,
  half: PropTypes.any,
  full: PropTypes.any,
  ratingsStyle: PropTypes.object,
  rating: PropTypes.number.isRequired,
};

Ratings.defaultProps = {
  empty: StarEmpty,
  half: StarHalfEmpty,
  full: StarFull,
  ratingsStyle: {},
};

export default Ratings;
