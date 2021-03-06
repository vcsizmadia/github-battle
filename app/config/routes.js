var React       = require('react');
var ReactRouter = require('react-router');

var IndexRoute = ReactRouter.IndexRoute;
var Route      = ReactRouter.Route;
var Router     = ReactRouter.Router;

var ConfirmBattleContainer = require('../containers/ConfirmBattleContainer');
var Home                   = require('../components/Home');
var Main                   = require('../components/Main');
var PromptContainer        = require('../containers/PromptContainer');

// 'react-router' 3.x fix:
// var browserHistory = ReactRouter.browserHistory;
// This seems to have fixed it:
var hashHistory = ReactRouter.hashHistory; // Is this no longer the default in 'react-router' 3.x?

// Note: The 'Main' component is always active.
// If you go to '/home', 'this.props.children' of 'Main' will be 'Home'!
// When none of the Route declarations match, IndexRoute is used.
var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='battle'               component={ConfirmBattleContainer}                     />
      <Route path='playerOne'            component={PromptContainer}        header='Player One' />
      <Route path='playerTwo/:playerOne' component={PromptContainer}        header='Player Two' />
    </Route>
  </Router>
);

module.exports = routes;
