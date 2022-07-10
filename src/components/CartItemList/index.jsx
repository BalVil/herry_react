import PropTypes from 'prop-types';
import CartItem from '../CartItem';
import styles from './style.module.css';

const CartItemList = ({ items, ...rest }) => (
  <div className={styles.cartItemList}>
    {items.map(item => (
      <CartItem key={item.id} item={item} {...rest} />
    ))}
  </div>
);

CartItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default CartItemList;
