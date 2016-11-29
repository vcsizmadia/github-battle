var Prompt = require('../components/Prompt');
var React  = require('react');

console.log('PromptContainer');

// CONTAINER VS. PRESENTATION COMPONENTS ... business logic vs. presentation logic...

var PromptContainer = React.createClass({
  // This way we do not need to pass down 'router' as 'props' from component to component.
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    console.log('PromptContainer.getInitialState');
    return {
      username: ''
    }
  },
  handleSubmitUser: function (e) {
    console.log('PromptContainer.onSubmitUser');
    e.preventDefault();
    var username = this.state.username;
    this.setState({
      username: ''
    });

    // This is basically a really sloppy way of handling the Player 1 and Player 2 routes. But it works for the purpose of this demo.
    // If the route has the 'playerOne' parameter (meaning the Player 1 username has already been submitted)...
    if (this.props.routeParams.playerOne) {
      console.log(this.context);
      // Go to the '/battle' route.
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      });
    }
    else {
      console.log(this.context);
      // Go to the '/playerTwo' route.
      this.context.router.push('/playerTwo/' + this.state.username);
    }
  },
  handleUpdateUser: function (e) {
    console.log('PromptContainer.onUpdateUser');
    this.setState({
      username: e.target.value
    });
  },
  render: function () {
    console.log('PromptContainer.render');
    // console.log(this);
    return (
      <Prompt
        header={this.props.route.header}
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        username={this.state.username}
      />
    )
  }
});

module.exports = PromptContainer;
