import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../actions/auth";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  static propTypes = {};


  handleChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.loginUser(this.state.username, this.state.password);
  };

  render() {
    if (this.props.auth.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { username, password } = this.state;
    return (
      <div className="page_container">
        <div
          className="col-md-4 m-auto py-5"
          style={{ justifySelf: "center", alignSelf: "center" }}
        >
          <div className="display-4 text-center">Login User</div>
          <div className="card mt-4 p-4">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Username</label>
                <input
                  required
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="Enter Username"
                  onChange={this.handleChange}
                  value={username}
                />
                <small id="usernameHelp" className="form-text text-muted">
                  Username mast be unique.
                </small>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  required
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                  value={password}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block  mb-3">
                  Login
                </button>
              </div>
            </form>
            <div className="text-center">
              <small className="form-text text-muted">
                Don't have an account. <Link to="/register">Register Here</Link>
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
export default connect(mapStateToProps, {
  loginUser
})(Login);
