import React from "react";
import { userLogin } from "../../utils/requests";
import { Link } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
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

    const username = this.state.user.username;
    const password = this.state.user.password;

    userLogin(username, password)
      .then((response) => {
        console.log("Login Response:", response);

        if (response.success) {
          window.location.href = "/feed";
        } else {
          console.log(response.error);
        }
      })
      .catch((error) => {
        console.error("Login Error:", error.message);
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
            type="username"
            className="form-control mb-3"
            placeholder="Username"
            value={this.state.user.username}
            onChange={(e) => {
              this.setState({
                user: {
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
                  username: this.state.user.username,
                  password: e.target.value,
                },
              });
            }}
            required
          />
          <button type="submit" className="btn btn-primary mb-3">
            Login
          </button>
          <p className="mb-0">
            Don't have an Account? <Link to="signup">Register</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default LoginForm;
