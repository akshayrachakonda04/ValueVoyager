import React, { Component } from "react";
import Cookies from 'js-cookie'
import { Link,Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: { email: '', password: '' },
      error: '',
      msg: '',
      loggedIn: false
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }));
  };

  handleClick = async (e) => {
    e.preventDefault();
    const { email, password } = this.state.formData;

    try {
      const apiUrl = 'http://localhost:3000/login';
      const options = {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json"
        }
      };
      const res = await fetch(apiUrl, options);
      const data = await res.json();

      if (res.ok) {
        console.log("logged in successfully");
        this.setState({ loggedIn: true });
        Cookies.set("jwt_token", data.jwtToken, {expires:30})
        const {history}=this.props
        history.push("/")
      } else {
        this.setState({ error: 'Invalid email or password' });
      }

      if (data.display_msg) {
        this.setState({ msg: data.display_msg });
      }
    } catch (error) {
      console.error('Error :', error);
    }
  };

  render() {
    const { formData, error, msg,loggedIn } = this.state;
    if(loggedIn){
        <Redirect to="/"/>
    }

    return (
      <div className="main-cont">
        <div className="main-cont-2">
          <center><h2>Login</h2></center>
          <div>
            <form>
              <div className="inside">
                <h5>Email</h5>
                <div>
                  <input 
                    type="email" 
                    name="email" 
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
                {msg && <p>{msg}</p>}
              </div>
              <div className="button">
                <div>
                  <button className="btn1" type="submit" onClick={this.handleClick}>Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="account">
          <p><center>Don't have an account? <Link to="/RegistrationForm">Register</Link></center></p>
        </div>
      </div>
    );
  }
}

export default Login;
