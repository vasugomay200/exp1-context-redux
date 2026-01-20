import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productsSlice";
import { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!name.trim()) return;

    dispatch(addProduct({ id: Date.now(), name }));
    setName("");
  };

  return (
    <div className="card">
      <h3>Add Product</h3>

      <input
        type="text"
        placeholder="Enter product name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <button onClick={handleAdd}>
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
