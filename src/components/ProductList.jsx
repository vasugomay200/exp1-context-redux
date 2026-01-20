import { useSelector, useDispatch } from "react-redux";
import { removeProduct } from "../redux/productsSlice";
import { addToCart } from "../redux/cartSlice";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import AddProduct from "./AddProduct";
import Cart from "./Cart.jsx";

const ProductList = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  const { role } = useContext(AuthContext);

  return (
    <>
      {/* ADMIN ONLY */}
      {role === "admin" && <AddProduct />}

      {/* PRODUCTS */}
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <p>{product.name}</p>

            {role === "admin" ? (
              <button onClick={() => dispatch(removeProduct(product.id))}>
                Delete
              </button>
            ) : (
              <button onClick={() => dispatch(addToCart(product))}>
                Add to Cart
              </button>
            )}
          </div>
        ))}
      </div>

      {/* USER ONLY */}
      {role === "user" && <Cart />}
    </>
  );
};

export default ProductList;
