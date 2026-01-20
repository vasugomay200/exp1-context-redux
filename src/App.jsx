import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Login from "./components/Login";
import ProductList from "./components/ProductList";

const App = () => {
  const { isLoggedIn, userName, logout } = useContext(AuthContext);

  return (
    <div className="container">
      {isLoggedIn && (
        <div className="topbar">
          <h2>Welcome, {userName}</h2>
          <button onClick={logout}>Logout</button>
        </div>
      )}

      {!isLoggedIn ? <Login /> : <ProductList />}
    </div>
  );
};

export default App;
