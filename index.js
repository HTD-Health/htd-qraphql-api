const {GraphQLServer} = require('graphql-yoga');
const {hello, helloWithName} = require('./src/queries/helloQueries/hello.resolver');
const {incrementMutation, incrementBy} = require('./src/mutations/helloMutations/hello.resolver')
const {getTweet, getTweets} = require('./src/queries/tweet/tweet.resover');
const {addTweet} = require('./src/mutations/tweet/tweet.resolver');
const resolvers = {
    Query: {
        hello,
        helloWithName,
        getTweet,
        getTweets
    },
    Mutation: {
        incrementMutation,
        incrementBy,
        addTweet
    }
};

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
});

server.start().then(() => {
    console.log("Server is running on port 4000");
}).catch(() => {
    console.log("Error ");
    process.exit(1);
});
