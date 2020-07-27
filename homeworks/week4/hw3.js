const request = require('request');
const pcs = require('process');

request.get(
  `https://restcountries.eu/rest/v2/name/${pcs.argv[2]}`,
  (error, response, body) => {
    const json = JSON.parse(body);
    for (let i = 0; i < json.length; i += 1) {
      console.log('================');
      console.log(`國家：${json[i].name}`);
      console.log(`首都：${json[i].capital}`);
      console.log(`貨幣：${json[i].currencies[0].code}`);
      console.log(`國碼：${json[i].callingCodes}`);
    }
  },
);
