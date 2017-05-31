const axios = require('axios');

const BASE_URL = 'https://www.reddit.com/r/test';
// const SUBMIT_PATH = '/api/submit';

const MINE_KARMA_PATH = '/api/v1/me/karma';

const fullUrl = `${BASE_URL}${MINE_KARMA_PATH}`;
axios.get(fullUrl)
  .then((res) => { console.log(res); })
  .catch((err) => { console.log(err.response.data); });

