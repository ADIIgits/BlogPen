import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = ({uimode}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });

      alert(response.data.message); // Show success message
      localStorage.setItem("username", response.data.username);
      navigate("/dashboard");

    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className={`p-6 rounded-lg shadow-lg w-96 ${uimode==0?"bg-white text-black":"bg-blue-200/10 text-white"}`}>
        <h2 className="text-2xl font-bold text-center">Login</h2>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        <form className="mt-4" onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block font-semibold">Username</label>
            <input
              type="text"
              className={`w-full p-2 border rounded ${uimode==0?"bg-black/5 border-black/10":"bg-blue-200/30 border-blue-200/20"}`}
              value={username}
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold">Password</label>
            <input
              type="password"
              className={`w-full p-2 border rounded ${uimode==0?"bg-black/5 border-black/10":"bg-blue-200/30 border-blue-200/20"}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;