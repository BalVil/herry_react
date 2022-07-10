import { useState } from 'react';
import CartInputForm from '../../components/CartInputForm';
import Loader from '../../components/Loader';
import CartItemList from '../../components/CartItemList';
import TotalAmount from '../../components/TotalAmount';

const initialState = [
  {
    id: '134656',
    name: 'printer',
    price: 110,
    count: 2,
    extendedGuarantee: false,
  },
  { id: '287766', name: 'RAM', price: 30, count: 0, extendedGuarantee: false },
  {
    id: '334568',
    name: 'motherboard',
    price: 150,
    count: 1,
    extendedGuarantee: true,
  },
];

const Cart = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState(initialState);

  const handleChangeCount = (id, step) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id
          ? {
              ...item,
              count: item.count + step >= 0 ? item.count + step : item.count,
            }
          : item,
      ),
    );
  };

  const handleRemoveItem = id =>
    setItems(prev => prev.filter(item => item.id !== id));

  const handleAddItem = newItem => setItems(prev => [...prev, newItem]);

  return (
    <div className="cart">
      <CartInputForm onSubmit={handleAddItem} />
      {isLoading && <Loader />}
      <CartItemList
        items={items}
        onChange={handleChangeCount}
        onRemoveItem={handleRemoveItem}
      />
      <TotalAmount items={items} />
    </div>
  );
};
export default Cart;
