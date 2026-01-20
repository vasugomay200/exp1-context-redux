import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [role, setRole] = useState("user");

  return (
    <div className="login-card">
      <h2>Login</h2>

      <input
        placeholder="Username"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <select onChange={e => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      <button onClick={() => login(name, role)}>Login</button>
    </div>
  );
};

export default Login;
