import React from "react";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: false,
    };

    // this.authenticated = this.authenticated.bind(this);
  }

  // componentDidMount() {}

  render() {
    return (
      <nav className="navbar bg-secondary mb-3 py-3">
        <div className="container">
          <a className="navbar-brand" href="/">
            Ripple
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
