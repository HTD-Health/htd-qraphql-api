let counter = 0;
const incrementMutation = () => ++counter
const incrementBy = (_, {by}) => {
    counter += by;
    return counter
}
module.exports = {
    incrementMutation,
    incrementBy
};
