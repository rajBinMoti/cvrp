import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/auth";
export class Header extends Component {
  logout = () => {
    this.props.logoutUser();
  };

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link
            className="navbar-brand me-auto ms-lg-0 ms-3 text-uppercase fw-bold"
            to="/"
          >CVRP</Link
          >
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#topNavBar"
            aria-controls="topNavBar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="topNavBar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/dashboard' >Dashboard</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/profile' >Profile</Link>
              </li> */}
            </ul>
            <form className="d-flex ms-auto my-3 my-lg-0">
            </form>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle ms-2"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person-fill"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  {
                    isAuthenticated ?
                      <>
                        {/* <li><Link className="dropdown-item" to="/login">Profile</Link></li> */}
                        <li><button className="btn btn-link text-decoration-none w-100" onClick={this.logout} >Logout</button></li>
                      </>
                      :
                      <>
                        <li><Link className="dropdown-item" to="/login">Login</Link></li>
                        <li><Link className="dropdown-item" to="/register">Register</Link></li>
                      </>
                  }
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {
    logoutUser
  }
)(Header);
