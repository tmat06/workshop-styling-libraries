import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import { Motion, spring } from "react-motion";
import routes from "./routes";

class App extends Component {
  constructor() {
    super();
    this.state = {
      slide: true
    };
  }

  toggleSlide = () => {
    this.setState({ slide: !this.state.slide });
  };

  render() {
    return (
      <div className="App">
        <div style={{ width: "100%" }}>{routes}</div>
        <Motion
          defaultStyle={{ x: 0, opacity: 0 }}
          style={{
            x: this.state.slide ? spring(95) : spring(0),
            opacity: this.state.slide ? spring(0) : spring(1)
          }}
        >
          {mot => {
            return <Nav mot={mot} toggleSlide={this.toggleSlide} />;
          }}
        </Motion>
      </div>
    );
  }
}

export default App;
