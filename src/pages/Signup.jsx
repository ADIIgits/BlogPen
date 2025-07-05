import { useState } from "react";
import axios from "axios";

export default function Signup({uimode}) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/signup", formData);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
        <div className={`w-82 p-10 shadow-lg rounded-lg ${uimode==0?"bg-white text-black":"bg-blue-200/10 text-white"}`}>
            <h2 className="text-center mb-4">Sign Up</h2>
            <form onSubmit={handleSubmit} className="">
              <label>Username</label>
              <input type="text" name="username" value={formData.username} onChange={handleChange} required className={`w-full p-2 mb-2 rounded border ${uimode==0?"bg-black/5 border-black/10":"bg-blue-200/30 border-blue-200/20"}`} />
              
              <label>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className={`w-full p-2 mb-2 rounded border ${uimode==0?"bg-black/5 border-black/10":"bg-blue-200/30 border-blue-200/20"}`} />
              
              <label>Password</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} required className={`w-full p-2 mb-2 rounded border ${uimode==0?"bg-black/5 border-black/10":"bg-blue-200/30 border-blue-200/20"}`} />
              
              <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded cursor-pointer">Sign Up</button>
            </form>
            {message && <p className="text-center mt-2 text-red-500">{message}</p>}
        </div>
    </div>

  );
}
