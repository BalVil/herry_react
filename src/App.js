import Cart from "./container";

const App = () => {
  return (
    <div className="App">
      <CartInputForm />
      <Loader />
      <CartItemList />
      <TotalAmount />
    </div>
  );
};

export default App;
