import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const submitRequest = async () => {
    event.preventDefault();
    if (password.length < 8) {
      setError("Password should be greater than 8 character");
    } else {
      try {
        const url = `${import.meta.env.VITE_server_URL}/api/auth/login`;
        const res = await axios.post(
          url,
          { email, password },
          {
            withCredentials: true, // Ensure that credentials are included in the request
          }
        );
        setUser(res.data);
        navigate("/");
      } catch (err) {
        setError("Password or Email is incorrect");
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 shadow-md rounded-md max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-600 text-sm font-semibold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border p-2 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-600 text-sm font-semibold mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              required
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border p-2 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            onClick={submitRequest}
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Log In
          </button>
        </form>
        <div className="flex justify-center">
          <p className="text-red-500 p-8">{error}</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
