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
      <div className="row mt-3 mb-3 box-component">
        <nav className="navbar px-3">
          <a className="navbar-brand" href="/">
            Ripple
          </a>
        </nav>
      </div>
    );
  }
}

export default NavBar;
