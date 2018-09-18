import React from "react";
import { withRouter, Link } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";

class Nav extends React.Component {
  render() {
    const { mot, toggleSlide } = this.props;
    return (
      <div
        id="side-menu"
        style={{
          transform: `translateX(${mot.x}%)`,
          opacity: mot.opacity + 0.5
        }}
      >
        {mot.opacity === 0 ? (
          <div
            onClick={() => toggleSlide()}
            style={{
              transform: `translateX(-${mot.x}px)`,
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh"
            }}
          />
        ) : (
          <div
            style={{
              opacity: mot.opacity
            }}
          >
            <button
              className="fluid ui button"
              role="button"
              onClick={() => toggleSlide()}
            >
              Hide Menu
            </button>
            <div id="nav-buttons">
              <Link to="/">
                <button className="ui button" role="button">
                  Comparisons
                </button>
              </Link>
              <Link to="/bootstrap">
                <button className="ui button" role="button">
                  Bootstrap
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Nav);
