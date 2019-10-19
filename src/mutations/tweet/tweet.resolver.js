const {tweets} = require('../../queries/tweet/tweet.resover');
const addTweet = (parent, args) => {
    const newTweet = {
        id: tweets.length + 1,
        text: args.text
    };
    tweets.push(newTweet);
    return newTweet;
};

module.exports = {
    addTweet
};
