var React    = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
  render: function () {
    return (
      <div> Hello React Program! </div>
    )
  }
});

// Render the 'HelloWorld' component into the 'app' element.
// $ npm run start
// Everything is under: http://localhost:8080, which points to 'dist'.
ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
);

// var app = document.getElementById('app');

// app.innerHTML = 'Hello!';
