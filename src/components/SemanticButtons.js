import React from "react";

export default class SemanticButtons extends React.Component {
  render() {
    return (
      <div className="library-view">
        <h1 style={{ fontStyle: "oblique" }}>Semantic</h1>
        <h3>Documentation</h3>

        <h5>
          <span>Documentation for component based styling:</span>
          <a
            href="https://react.semantic-ui.com/"
            style={{ fontStyle: "italic" }}
          >
            https://react.semantic-ui.com/
          </a>
        </h5>
        <p className="side-menu-description">
          Semantic UI is a modern front-end development framework, powered by
          LESS and jQuery (is now compatible with React via semantic-ui-react).
          It has a sleek, subtle, and flat design look that provides a
          lightweight user experience. According to the Semantic UI website, the
          goal of the framework is to empower designers and developers “by
          creating a language for sharing UI”. They do this by leveraging a
          semantic, descriptive language for its classes and naming conventions.
          Instead of using abbreviations, as other frameworks do, it utilizes
          real words in a manner closer to plain English.
        </p>
        <img src="/semantic-simple-example.PNG" style={{ width: "50%" }} />

        <ul className="side-menu-description">
          <li>Installed using npm install semantic-ui-react</li>
          <li>
            You also need to include a link tag to the antd stylesheet in your
            index.html as instructed in the Semantic UI React docs
          </li>
          <li>
            Component based - uses imported components from 'semantic-ui-react'
          </li>
        </ul>
      </div>
    );
  }
}
