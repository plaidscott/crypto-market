var axios = require('axios');

module.exports = {
  ticker: () => {
    return axios.get('https://api.coinmarketcap.com/v1/ticker/')
      .then( response => {
        console.log('response in ticker/api.js', response);
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
