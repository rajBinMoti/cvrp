import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/auth";

class Register extends Component {
  state = {
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    password2: ""
  };

  static propTypes = {};

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const {
      first_name,
      last_name,
      username,
      email,
      password,
      password2
    } = this.state;
    if (password === password2) {
      this.props.registerUser(first_name, last_name, username, email, password);
    } else {
      alert("Password don't match");
    }
  };

  render() {
    const { isAuthenticated } = this.props.auth;
    if (isAuthenticated) {
      return <Redirect to="/" />;
    }
    const {
      first_name,
      last_name,
      username,
      email,
      password,
      password2
    } = this.state;
    return (
      <div className="page_container py-5">
        <div className="display-4 text-center">Register User</div>
        <div className="col-md-4 m-auto">
          <div className="card mt-4 p-4">
            <form onSubmit={this.onSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">First Name</label>
                    <input required
                      type="text"
                      className="form-control"
                      name="first_name"
                      placeholder="Enter First Name"
                      onChange={this.handleChange}
                      value={first_name}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Last Name</label>
                    <input required
                      type="text"
                      className="form-control"
                      name="last_name"
                      placeholder="Enter Last Name"
                      onChange={this.handleChange}
                      value={last_name}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Username</label>
                <input required
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="Enter Username"
                  onChange={this.handleChange}
                  value={username}
                />
                <small id="usernameHelp" className="form-text text-muted">
                  Username must be unique.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input required
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter Email"
                  onChange={this.handleChange}
                  value={email}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input required
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                  value={password}
                />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="exampleInputPassword1">Confirm Password</label>
                <input required
                  type="password"
                  className="form-control"
                  name="password2"
                  placeholder="Password"
                  onChange={this.handleChange}
                  value={password2}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Register
              </button>
            </form>
            <div className="text-center">
              <small className="form-text text-muted">
                Already have an account. <Link to="/login">Login Here</Link>
              </small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {
    registerUser
  }
)(Register);
