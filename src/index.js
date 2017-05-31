const snoowrap = require('snoowrap');

require('dotenv').config();

const CLIENT_ID = process.env.CLIENT_ID;
const API_SECRET = process.env.API_SECRET;
const REDDIT_USERNAME = process.env.REDDIT_USERNAME;
const REDDIT_PASSWORD = process.env.REDDIT_PASSWORD;

const reddit = new snoowrap({
  userAgent: `Cool bot by /u/${REDDIT_USERNAME}`,
  clientId: CLIENT_ID,
  clientSecret: API_SECRET,
  username: REDDIT_USERNAME,
  password: REDDIT_PASSWORD
});

const SUBREDDIT_NAME = 'sandboxtest';

const postData = {
  title: 'nsa secrets2',
  text: 'secret3 **secret5**',
};

reddit.getSubreddit(SUBREDDIT_NAME)
  .submitSelfpost(postData)
  .then(console.log);
