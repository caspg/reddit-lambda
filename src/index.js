const querystring = require('querystring');
const axios = require('axios');

require('dotenv').config();

const CLIENT_ID = process.env.CLIENT_ID;
const API_SECRET = process.env.API_SECRET;
const REDDIT_USERNAME = process.env.REDDIT_USERNAME;
const REDDIT_PASSWORD = process.env.REDDIT_PASSWORD;

async function getAccessToken() {
  const url = 'https://www.reddit.com/api/v1/access_token';
  const auth = { username: CLIENT_ID, password: API_SECRET };
  const data = { grant_type: 'password', username: REDDIT_USERNAME, password: REDDIT_PASSWORD };
  const encodedData = querystring.stringify(data);

  try {
    const response = await axios.post(url, encodedData, { auth });
    const token = response.data.access_token;

    return token;
  } catch (error) {
    console.log(error);
  }
}

async function getMe() {
  const token = await getAccessToken();
  const url = 'https://oauth.reddit.com/api/v1/me';
  const headers = { Authorization: `bearer ${token}`};

  const response = await axios.get(url, { headers });

  console.log(response.data);
}

getMe();
