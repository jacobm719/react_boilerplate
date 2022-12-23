// React: library to render the page, single page application,
//      multi page application (server-side rendering), JSP
// Advantage: performance, modularization
// Boilerplate: create-react-app (CRA), bundler, transpiler
// Transpiler: babel: transpile newer version of javascript 
//      into older more compatible version of javascript
// Bundler: webpack
// Module system: common.js, esmodule, umd, system.js
// Sub-dependency
// Minification

// React: object
// Component: class

import HelloMessage from "./component/HelloMessage";
import ReactDOM from "react-dom/client";
import React from "react";

// class HelloMessage extends React.Component {
//   render() {
//     return <div>Hello {this.props.name}</div>; // JSX

//     // return React.createElement(
//     //     "div",
//     //     null,
//     //     "Hello ",
//     //     this.props.name
//     //   );
//   }
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HelloMessage name="Taylor" />);