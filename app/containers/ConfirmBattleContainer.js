var React         = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

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
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then(function (players) {
        console.log('PLAYERS', players);
        // Because of the 'bind' below, 'this' actually refers to the same 'this' that is above (in the outer context).
        this.setState({
          isLoading:   false,
          playersInfo: [players[0], players[1]]
        });
      }.bind(this));
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
  handleInitiateBattle: function () {
    this.context.router.push({
      pathname: '/results',
      state: {
        playerInfo: this.state.playerInfo
      }
    });
  },
  render: function() {
    console.log('ConfirmBattleContainer.render');
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        onInitiateBattle={this.handleInitiateBattle}
        playersInfo={this.state.playersInfo}
      />
    )
  }
});

module.exports = ConfirmBattleContainer;
