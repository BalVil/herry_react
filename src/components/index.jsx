import propTypes from "prop-types";

const TotalAmount = ({ items }) => {
  const total = items.reduce((acc, item) => acc + item);
  return <p>Total: {total}$</p>;
};

TotalAmount.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      count: propTypes.number.isRequired,
      price: propTypes.number.isRequired,
    })
  ),
};

export default TotalAmount;

//  <div className="App">
//       <form>
//         <label>
//           <span>name</span>
//           <input type="text"></input>
//         </label>

//         <label>
//           <span>price</span>
//           <input type="number"></input>
//         </label>
//         <button type="submit">+ add</button>
//       </form>
//     </div>
