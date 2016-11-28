var React = require('react');

console.log('Main');

var Main = React.createClass({
  render: function () {
    console.log('Main.render');
    return (
      <div className='main-container'>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
