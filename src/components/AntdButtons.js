import React from "react";

export default class AntdButtons extends React.Component {
  render() {
    return (
      <div className="library-view">
        <h1 style={{ fontStyle: "oblique" }}>Ant Design</h1>
        <h3>Documentation</h3>

        <h5>
          <a
            href="https://ant.design/docs/react/introduce"
            style={{ fontStyle: "italic" }}
          >
            https://ant.design/docs/react/introduce
          </a>
        </h5>
        <section className="info-view">
          <ul className="side-menu-description">
            <li>Installed using npm install material-ui</li>
            <li>
              The docs recommend installing the roboto font, instructions are in
              the docs
            </li>
            <li>
              The docs also require that you wrap your App component in a theme
              provider (see src/index.js)
            </li>
            <li>
              Component based - using imported components from 'material-ui'
            </li>
          </ul>
        </section>
      </div>
    );
  }
}
