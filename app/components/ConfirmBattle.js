var React = require('react');

console.log('ConfirmBattle');

function ConfirmBattle (props) {
  console.log('ConfirmBattle.render');
  return props.isLoading === true
    ? <p> LOADING! </p>
    : <p> CONFIRM BATTLE! </p>  
}

module.exports = ConfirmBattle;
