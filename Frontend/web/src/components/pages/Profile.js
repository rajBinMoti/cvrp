import React, { Component } from "react";
import { connect } from "react-redux";


export class Profile extends Component {
  static propTypes = {};

  render() {
    const { first_name, last_name, username, email } = this.props.auth.user;
    return (<>
      <main className="mt-5 pt-3">
        <div className="container mt-4">
          <h1>Welcome {username},</h1>
          <div className="col-md-4 m-auto">
            <div className="card mt-4 p-4">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="first_name"
                      placeholder="First Name"
                      onChange={this.handleChange}
                      value={first_name}
                      readOnly
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="last_name"
                      placeholder="Last Name"
                      onChange={this.handleChange}
                      value={last_name}
                      readOnly
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="Username"
                  onChange={this.handleChange}
                  value={username}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  value={email}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(Profile);
