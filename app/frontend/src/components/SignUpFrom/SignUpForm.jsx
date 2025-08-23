import React from "react";
import { userSignUp } from "../../utils/requests";
import { Link } from "react-router-dom";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: "",
        username: "",
        password: "",
      },
      loading: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.loading) {
      return;
    }

    this.setState({
      loading: true,
    });

    const email = this.state.user.email;
    const username = this.state.user.username;
    const password = this.state.user.password;

    userSignUp(email, username, password)
      .then((response) => {
        console.log("SignUp Response:", response);

        if (response.success) {
          window.location.href = "/feed";
        } else {
          console.log(response.error);
        }
      })
      .catch((error) => {
        console.error("SignUp Error:", error.message);
      })
      .finally(() => {
        this.setState({
          loading: false,
        });
      });
  }

  render() {
    return (
      <div className="col-lg-4 col-md-12 align-content-center box-component p-5">
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email"
            value={this.state.user.email}
            onChange={(e) => {
              this.setState({
                user: {
                  email: e.target.value,
                  username: this.state.user.username,
                  password: this.state.user.password,
                },
              });
            }}
            required
          />
          <input
            type="username"
            className="form-control mb-3"
            placeholder="Username"
            value={this.state.user.username}
            onChange={(e) => {
              this.setState({
                user: {
                  email: this.state.user.email,
                  username: e.target.value,
                  password: this.state.user.password,
                },
              });
            }}
            required
          />
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            value={this.state.user.password}
            onChange={(e) => {
              this.setState({
                user: {
                  email: this.state.user.email,
                  username: this.state.user.username,
                  password: e.target.value,
                },
              });
            }}
            required
          />
          <button type="submit" className="btn btn-primary mb-3">
            Sign Up
          </button>
          <p className="mb-0">
            Have an Account? <Link to="/">Sign In</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
