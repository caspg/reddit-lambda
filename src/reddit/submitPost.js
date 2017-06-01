const snoowrap = require('snoowrap');

require('dotenv').config();

const REDDIT_CLIENT_ID = process.env.REDDIT_CLIENT_ID;
const REDDIT_API_SECRET = process.env.REDDIT_API_SECRET;
const REDDIT_USERNAME = process.env.REDDIT_USERNAME;
const REDDIT_PASSWORD = process.env.REDDIT_PASSWORD;

const reddit = new snoowrap({
  userAgent: `Cool bot by /u/${REDDIT_USERNAME}`,
  clientId: REDDIT_CLIENT_ID,
  clientSecret: REDDIT_API_SECRET,
  username: REDDIT_USERNAME,
  password: REDDIT_PASSWORD
});

const SUBREDDIT_NAME = 'sandboxtest';

const postData = {
  title: 'nsa secrets1',
  text: 'secret3 **secret5**',
};

function submitPost() {
  reddit.getSubreddit(SUBREDDIT_NAME)
    .submitSelfpost(postData)
    .then(console.log)
    .catch(console.log);
}

module.exports = submitPost;