import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { authActions } from "../Store/auth";
import axios from 'axios';
import { useDispatch } from "react-redux";

function SignIn() {
  const [values, setValues] = useState({
    username:"",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const change = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      if (values.username === "" || values.password === "") {
        alert("All fields are required");
        return;
      }

      const response = await axios.post("https://bookhaven-gx84.onrender.com/api/v1/sign-in", values);
      

      dispatch(authActions.login());
      dispatch(authActions.ChangeRole(response.data.roles));

        localStorage.setItem("id",response.data.id);
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("role",response.data.roles)
        
         
        navigate("/profile");


    } catch (error) {
      alert(error.response.data.message || "An unexpected error occurred.");
    }
  };

  return (
    <div className="bg-gray-900 flex justify-center items-center min-h-screen">
      <div className="bg-gray-800 p-10 rounded-xl shadow-xl w-full max-w-lg">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-white">
          Login to Your Account
        </h2>

        <form onSubmit={submit} >
          <div className="mb-6">
            <label htmlFor="username" className="block text-2xl font-semibold mb-2 text-gray-300">
              username
            </label>
            <input
              value={values.username}
              onChange={change}
              type="username"
              id="username"
              name="username"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-500 focus:border-purple-400 transition duration-300"
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-2xl font-semibold mb-2 text-gray-300">
              Password
            </label>
            <input
              value={values.password}
              onChange={change}
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-500 focus:border-purple-400 transition duration-300"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-gray-300 text-2xl">
              <input type="checkbox" className="mr-2 w-6 h-6" />
              Remember Me
            </label>
            <Link to="/forgot-password" className="text-purple-400 hover:text-purple-500 text-lg">
              Forgot Password?
            </Link>
          </div>

          <div>
            <button 
            
              className="w-full bg-purple-600 text-white text-xl font-bold py-3 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-500 transition duration-300"
            >
              Log In
            </button>
          </div>
        </form>

        <div className="my-6 text-center text-gray-500">or</div>

        <div className="mt-6 text-center">
          <Link to="/sign-up" className="text-gray-300 text-2xl">
            Don't have an account?{" "}
            <span className="text-purple-400 hover:text-purple-500">Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
