import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    adress: "",
  });

  const navigate = useNavigate();

  const change = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      if (!values.username || !values.email || !values.password || !values.adress) {
        alert("All fields are required");
        return;
      }

      const response = await axios.post("https://bookhaven-gx84.onrender.com/api/v1/sign-up", values);
      alert(response.data.message);
      navigate("/sign-in");
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong, please try again.");
    }
  };

  return (
    <div className="bg-gray-900 flex justify-center items-center min-h-screen">
      <div className="bg-gray-800 p-10 rounded-xl shadow-xl w-full max-w-lg">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-white">
          Create Your Account
        </h2>

        <form onSubmit={submit}>
          <div className="mb-6">
            <label htmlFor="username" className="block text-xl font-semibold mb-2 text-gray-300">
              Username
            </label>
            <input
              value={values.username}
              onChange={change}
              type="text"
              id="username"
              name="username"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-500 focus:border-purple-400 transition duration-300"
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-xl font-semibold mb-2 text-gray-300">
              Email
            </label>
            <input
              value={values.email}
              onChange={change}
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-500 focus:border-purple-400 transition duration-300"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-xl font-semibold mb-2 text-gray-300">
              Password
            </label>
            <input
              value={values.password}
              onChange={change}
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-500 focus:border-purple-400 transition duration-300"
              placeholder="Create a password"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="adress" className="block text-xl font-semibold mb-2 text-gray-300">
              Address
            </label>
            <input
              value={values.adress}
              onChange={change}
              type="text"
              id="adress"
              name="adress"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-500 focus:border-purple-400 transition duration-300"
              placeholder="Enter your address"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white text-xl font-bold py-3 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-500 transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="my-6 text-center text-white">or</div>

        <div className="flex justify-between">
          <Link
            to="/sign-in"
            className="w-full bg-blue-600 text-white no-underline text-xl text-center font-semibold py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-300 mx-1"
          >
            Login here!
          </Link>
          <button
            className="w-full bg-gray-900 text-white text-xl font-semibold py-3 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-500 transition duration-300 mx-1"
          >
            Sign Up with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
