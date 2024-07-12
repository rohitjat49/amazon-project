
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarForm from "../component/NavbarForm";

const UserLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please fill in both username and password fields.");
      return;
    }

    try {
      const response = await fetch("https://ecommerce-vyte.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
      
        navigate("/Cards-details"); // Add this line to navigate to the user page after logging in
      } else {
        setMessage(data.message || "Invalid username or password. Please try again.");
      }
    } catch (error) {
      console.log(error);
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <NavbarForm />
      <div className="container d-flex align-items-center justify-content-center min-vh-100">
        <div className="row justify-content-center w-100">
          <div className="col-md-8 col-lg-6">
            <div className="cards">
              <div className="card-body">
                <h5 className="card-title text-center mt-2">Login</h5>
                <h1 className="card-subtitle mb-4 text-center">Welcome Back!</h1>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      placeholder="Enter your username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn-buy-now">
                      Login
                    </button>
                  </div>
                </form>
                {message && <p className="mt-3 text-center text-danger">{message}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
