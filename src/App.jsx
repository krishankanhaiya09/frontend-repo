import { useState } from "react";
import axios from "axios";

const API = "backend-repo.railway.internal"; // baad me change hoga

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    const res = await axios.post(`${API}/register`, {
      username,
      email,
      password
    });
    alert(res.data.message);
  };

  const login = async () => {
    const res = await axios.post(`${API}/login`, {
      email,
      password
    });
    alert(res.data.message);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Register</h2>
      <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={register}>Register</button>

      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default App;