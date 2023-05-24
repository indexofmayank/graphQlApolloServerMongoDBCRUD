const {gql} = require('apollo-server-express');

const typeDefs = gql `
    type Post {
        id: ID
        title: String
        description: String
    }

    type Query {
        hello: String
        getAllPosts: [Posts]
        getPost(id: Id): Post
    }

    input PostInput {
        title: String
        description: String
    }

    type Mutation {
        createPost(post: PostInput): Post
        deletePost(id: ID): String
        updatePost(id: ID, post: postInput  ): Post
    }

`;

module.exports = typeDefs;

