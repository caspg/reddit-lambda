const fs = require('fs');
const path = require('path');
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

function readPostBody() {
  const filePath = path.resolve(__dirname, './postBody.md');
  const data = fs.readFileSync(filePath, 'utf8');

  return data;
}

function submitPost() {
  const subreddit_name = 'testingground4bots';
  const title = 'Lorem title';
  const text = readPostBody();

  const postData = { title, text };

  return reddit.getSubreddit(subreddit_name)
    .submitSelfpost(postData);
}

module.exports = submitPost;
