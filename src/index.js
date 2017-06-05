const submitPost = require('./reddit/submitPost');

exports.handler = (event, context, callback) => {
  submitPost(event)
    .then((result) => {
      console.log('SUCCESS:', result);
      callback(null, 'Post submitted successfully!');
    })
    .catch((error) => {
      console.log('ERROR:', error);
      callback(null, 'There was some error, check logs.');
    });
};
