import PropTypes from 'prop-types';

const bookPropType = {
  book: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    category: PropTypes.string,
    author: PropTypes.string,
    completed: PropTypes.string,
    current_chapter: PropTypes.string,
  }).isRequired,
};

const newBookPropType = {
  addNewBook: PropTypes.func.isRequired,
};

export { bookPropType, newBookPropType };
