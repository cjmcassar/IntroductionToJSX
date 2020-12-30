var React = require("react");
var ReactDom = require("react-dom");

const fName = "Chris";
const lName = "Caesar";
const num = 7;

ReactDom.render(
  <div>
    <h1>
      Hello {fName} {lName}
    </h1>
    <p>Your lucky number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
