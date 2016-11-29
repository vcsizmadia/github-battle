var React = require('react');
// var PropTypes = React.PropTypes;

console.log('Main');

var Main = React.createClass({
  // Use 'propTypes.bool' rather than 'propTypes.boolean'.
  // Use 'propTypes.func' rather than 'propTypes.function'.
  // propTypes: {
  //   name: PropTypes.string.isRequired,
  //   size: PropTypes.number.isRequired,
  //   color: PropTypes.string.isRequired,
  //   style: PropTypes.object
  // },
  render: function () {
    console.log('Main.render');
    return (
      <div className='main-container'>
        {this.props.children}
      </div>
    )
  }
});

// Can also be written as the following "Stateless Functional Component."
// Please note, however, that 'shouldComponentUpdate' would not be supported.
// Future "Functional Components" may contain state.
// function Main (props) {
//   console.log('Main.render');
//   return (
//     <div className='main-container'>
//       {props.children}
//     </div>
//   )
// }

module.exports = Main;
