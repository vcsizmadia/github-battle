var axios = require('axios');

// var id = 'YOUR_CLIENT_ID';
// var sec = 'YOUR_SECRET_ID';
// var param = '?client_id=' + id + '&client_secret=' + sec;

function getUserInfo (username) {
  // Returns a promise!
  // return axios.get('https://api.github.com/users/' + username + param);
  return axios.get('https://api.github.com/users/' + username);
}

var helpers = {
  getPlayersInfo: function (players) {
    // The 'all' function ensures all promises get resolved before moving onto 'then'.
    return axios.all(players.map(function (username) {
      return getUserInfo(username);
    })).then(function (info) {
      console.log('INFO', info);
      // Extract 'data' from the object.
      return info.map(function (user) {
        return user.data;
      });
    }).catch(function (err) {
      console.warn('Error in getPlayersInfo', err);
    });
  }  
};

module.exports = helpers;
