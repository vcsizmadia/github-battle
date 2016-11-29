var React       = require('react');
var ReactRouter = require('react-router');

var Link = ReactRouter.Link;

var transparentBg = require('../styles').transparentBg;

console.log('Home');

var Home = React.createClass({
  render: function () {
    console.log('Home.render');
    return (
      <div className='jumbotron col-sm-12 text-center' style={transparentBg}>
        <h1>
          Github Battle
        </h1>
        <p className='lead'>
          Some fancy motto...
        </p>
        <Link to='/playerOne'>
          <button className='btn btn-lg btn-success' type='button'>
            Get Started
          </button>
        </Link>
      </div>
    )
  }
});

module.exports = Home;
