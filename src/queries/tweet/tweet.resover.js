const tweets = [
    {id: 1, text: "Cześć GRAPHQL!"},
    {id: 2, text: "Cześć HTD Academy!"},
];

const getTweet = (_, {id}) => {
    console.log('tweets', tweets);
    return tweets.find(tweet => tweet.id === id);
};

const getTweets = () => {
    return tweets;
}

module.exports = {
    getTweet,
    getTweets,
    tweets
};
