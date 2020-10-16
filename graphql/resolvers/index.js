const userResolver = require('./user')
const postResolver = require('./post')
const commentResolver = require('./comment')

// graphql/resolvers/index.js

module.exports = [userResolver, postResolver, commentResolver];