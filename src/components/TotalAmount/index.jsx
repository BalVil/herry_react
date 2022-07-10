import PropTypes from 'prop-types';
import styles from './style.module.css';

const TotalAmount = ({ items }) => {
  const total = items.reduce((acc, item) => acc + item.count * item.price, 0);
  return <p className={styles.totalAmount}>Total: {total}$</p>;
};

TotalAmount.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      count: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ),
};

export default TotalAmount;
