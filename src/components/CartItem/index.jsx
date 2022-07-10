import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { CloseButton } from '../Button';

const useStyles = createUseStyles({
  cartItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    columnGap: 30,
    padding: 10,
    backgroundColor: '#2db4b4',
  },
  leftCol: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 100,
  },
  rightCol: {
    display: 'flex',
  },
  counter: {
    display: 'flex',
    columnGap: 10,
  },
  amount: {
    minWidth: 50,
    textAlign: 'right',
  },
  value({ item }) {
    return {
      color: 'red',
      fontWeight: !item.count ? 800 : 400,
    };
  },
});

const CartItem = ({
  item,
  onRemoveItem,
  onChange,
  onDecrement,
  onIncrement,
}) => {
  const styles = useStyles({ item });

  const { id, name, count, price, extendedGuarantee } = item;
  const amount = count * price;

  const decrement = () => onChange(id, -1);
  const increment = () => onChange(id, +1);
  const remove = () => onRemoveItem(id);

  return (
    <div className={styles.cartItem}>
      <div className={styles.leftCol}>
        <span>{name}</span>
        <span>{price}$</span>
      </div>

      <div className={styles.counter}>
        <button onClick={decrement}>-</button>
        <span className={styles.value}>{count}</span>
        <button onClick={increment}>+</button>
      </div>

      <span className={styles.amount}>
        {amount}${extendedGuarantee && ' +10%'}
      </span>
      <CloseButton onRemoveItem={remove} />
      {/* <NormalButton /> */}
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  }),
  onRemoveItem: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  // onDecrement: PropTypes.func.isRequired,
  // onIncrement: PropTypes.func.isRequired,
};

export default CartItem;
