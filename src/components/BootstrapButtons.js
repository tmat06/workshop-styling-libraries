import React from "react";

export default class BootstrapButtons extends React.Component {
  render() {
    return (
      <div className="library-view">
        <h1 style={{ fontStyle: "oblique" }}>Bootstrap</h1>
        <h3>Documentation</h3>
        <h5>
          <span>Documentation for class based styling: </span>
          <a href="https://getbootstrap.com/" style={{ fontStyle: "italic" }}>
            https://getbootstrap.com/
          </a>
        </h5>
        <h5>
          <span>Documentation for component based styling:</span>
          <a
            href="https://react-bootstrap.github.io/getting-started/introduction/"
            style={{ fontStyle: "italic" }}
          >
            https://react-bootstrap.github.io/getting-started/introduction/{" "}
          </a>
        </h5>
        <p className="side-menu-description">
          Originally created by a designer and a developer at Twitter, Bootstrap
          has become one of the most popular front-end frameworks and open
          source projects in the world. Bootstrap was created at Twitter in
          mid-2010 by @mdo and @fat. Prior to being an open-sourced framework,
          Bootstrap was known as Twitter Blueprint. A few months into
          development, Twitter held its first Hack Week and the project exploded
          as developers of all skill levels jumped in without any external
          guidance. It served as the style guide for internal tools development
          at the company for over a year before its public release, and
          continues to do so today. Originally released on Friday, August 19,
          2011. With Bootstrap 2, we added responsive functionality to the
          entire framework as an optional stylesheet. Building on that with
          Bootstrap 3, we rewrote the library once more to make it responsive by
          default with a mobile first approach. With Bootstrap 4, we once again
          rewrote the project to account for two key architectural changes: a
          migration to Sass and the move to CSS’s flexbox. Our intention is to
          help in a small way to move the web development community forward by
          pushing for newer CSS properties, fewer dependencies, and new
          technologies across more modern browsers.
        </p>
        <img src="/bootstrap-simple-example.PNG" style={{ width: "50%" }} />
        <ul className="side-menu-description">
          <li>
            Not strictly a react library, but rather uses a common stylesheet
            and you just add special classes defined in the docs to your code
          </li>
          <li>Can also be used with plain HTML</li>
          <li>
            When using React apps, referencing the bootstrap JS code including
            Jquery is highly discouraged because it doesn't play nice with React
            and will likely introduce strange bugs into your app
          </li>
        </ul>
        <ul className="side-menu-description">
          <li>Installed using npm install react-bootstrap</li>
          <li>
            You also need to include a link tag to the bootstrap stylesheet in
            your index.html as instructed in the react-bootstrap docs
          </li>
          <li>
            Component based - uses imported components from 'react-bootstrap'
          </li>
          <li>Implements bootstrap's elements using React components</li>
        </ul>
      </div>
    );
  }
}
