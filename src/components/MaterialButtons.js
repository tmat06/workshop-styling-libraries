import React from "react";

export default class MaterialButtons extends React.Component {
  render() {
    return (
      <div className="library-view">
        <h1 style={{ fontStyle: "oblique" }}>Material UI</h1>
        <h3>Documentation</h3>

        <h5>
          <span>Documentation for component based styling:</span>
          <a href="https://material-ui.com/" style={{ fontStyle: "italic" }}>
            https://material-ui.com/
          </a>
        </h5>
        <p className="side-menu-description">
          Material-UI's Vision: "Our vision is to provide an elegant React
          implementation of the Material Design guidelines that can be
          customized to fully match your brand". The Material Design guidelines
          are an incredible starting point, but they do not provide guidance on
          all aspects or needs of an application. In addition to the
          guidelines-specific implementation, we want Material-UI to become
          whatever is generally useful for application development, all in the
          spirit of the Material Design guidelines. Therefore, Material-UI will
          be not only be an implementation of the Material Design guidelines,
          but a general use UI library of components that are needed by many.
          This generalized use doesn't imply any other design methodology. It
          also means we will have components or combinations that are simply not
          addressed in the design guidelines. We will focus on providing all the
          low-level tools needed to build a rich user-interface with React. Once
          we implement the Material design specification (which is a bar set
          quite high), you should be able to take advantage of it for you own
          business with any style customization needed. We want to see companies
          succeeding using Material-UI in a way that matches their brand, close
          to the material philosophy or not. We don't want them to feel that
          their UI simply looks like another Google product. From a developer's
          point of view, we want Material-UI to: Deliver on fully encapsulated /
          composable React components. Be themeable / customizable. Be cross
          browser compatible and accessible. Promote developer joy, a sense of
          community, and an environment where new and experienced developers can
          learn from each other.
        </p>
        <img src="/material-simple-example.PNG" style={{ width: "50%" }} />

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
      </div>
    );
  }
}
