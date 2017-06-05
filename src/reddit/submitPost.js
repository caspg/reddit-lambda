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


function parseSubredditName(event) {
  const defaultSubreddit = 'test';

  if (!!event.resources || !!event.resources[0]) return defaultSubreddit;

  const resource = event.resources[0];

  const splitted = resource.split('/');
  return splitted[splitted.length - 1];
}

function submitPost(event) {
  const subredditName = parseSubredditName(event);
  const title = 'Lorem title';
  const text = readPostBody();

  const postData = { title, text };

  return reddit.getSubreddit(subredditName)
    .submitSelfpost(postData);
}

module.exports = submitPost;
