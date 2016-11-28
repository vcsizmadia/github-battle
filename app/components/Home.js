var React = require('react');

console.log('Home');

var Home = React.createClass({
  render: function () {
    console.log('Home.render');
    return (
      <div> Hello from Home! </div>
    )
  }
});

module.exports = Home;
