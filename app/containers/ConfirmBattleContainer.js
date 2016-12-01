var React         = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

console.log('ConfirmBattleContainer');

// Key lifecycle methods:
// - componentDidMount
// - componentWillMount
// - componentWillReceiveProps
// - componentWillUnmount

var ConfirmBattleContainer = React.createClass({
  componentDidMount: function () {
    // This is run after the component gets rendered.
    var query = this.props.location.query;
    // Fetch info from GitHub and then update the state.
  },
  componentWillMount: function () {
    // Runs before the component gets rendered.
  },
  componentWillReceiveProps: function () {
    // 
  },
  componentWillUnmount: function () {
    // Runs when we navigate away from this route.
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    // Always runs first.
    return {
      isLoading:  true,
      playersInfo: []
    }
  },
  render: function() {
    console.log('ConfirmBattleContainer.render');
    return (
      <ConfirmBattle isLoading={this.state.isLoading} playersInfo={this.state.playersInfo} />
    )
  }
});

module.exports = ConfirmBattleContainer;
