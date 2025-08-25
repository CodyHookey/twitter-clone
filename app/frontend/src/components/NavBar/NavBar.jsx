import React from "react";
import { authenticated, logout } from "../../utils/requests";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };

    this.authenticate = this.authenticate.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    this.authenticate();
  }

  authenticate() {
    authenticated()
      .then((response) => {
        this.setState({
          currentUser: response.username,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleLogout() {
    logout()
      .then((response) => {
        if (response.success) {
          this.setState({
            currentUser: null,
          });
          window.location.href = "/";
        } else {
          console.log("Logout failed");
        }
      })
      .catch((error) => {
        console.error("Logout Failed", error);
      });
  }

  render() {
    const { currentUser } = this.state;

    return (
      <nav className="navbar mb-3 py-2">
        <div className="container justify-content-between">
          <a className="navbar-brand" href="/">
            Ripple
          </a>
          <div>
            {currentUser && (
              <a className="me-3" href={`/users/${currentUser}`}>
                {currentUser}
              </a>
            )}
            {currentUser ? (
              <button
                className="btn btn-outline-danger"
                onClick={this.handleLogout}
              >
                Logout
              </button>
            ) : null}
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
