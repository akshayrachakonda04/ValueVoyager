import React, { Component } from "react";
import { Link } from "react-router-dom";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        userName: "",
        email: "",
        password: "",
        ConfirmPassword: "",
      },
      message: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: { ...prevState.formData, [name]: value },
    }));
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { userName, email, password, ConfirmPassword } = this.state.formData;

    if (password !== ConfirmPassword) {
      this.setState({ message: "Passwords do not match" });
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({ username: userName, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.display_msg || "Failed to register");
      }

      this.setState({ message: data.display_msg });
    } catch (error) {
      console.error("Error during registration:", error);
      this.setState({ message: error.message });
    }
  };

  render() {
    const { formData, message } = this.state;

    return (
      <div className="main-cont">
        <div className="main-cont-2">
          <center>
            <h2>Sign Up</h2>
          </center>
          <form onSubmit={this.handleSubmit}>
            <div className="inside2">
              <h5>Name</h5>
              <div>
                <input
                  name="userName"
                  type="text"
                  value={formData.userName}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <h5>Email</h5>
              <div>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <h5>Password</h5>
              <div>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <h5>Confirm Password</h5>
              <div>
                <input
                  type="password"
                  name="ConfirmPassword"
                  value={formData.ConfirmPassword}
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>
            <div className="button">
              <div>
                <button className="btn1" type="submit">
                  Register
                </button>
              </div>
            </div>
          </form>
          {message && <p>{message}</p>}
        </div>
        <div className="account">
          <p>
            <center>
              Have an account? <Link to="/Login">Login</Link>
            </center>
          </p>
        </div>
      </div>
    );
  }
}

export default RegistrationForm;
