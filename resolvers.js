const Post = require("./models/Post.model");

const resolvers = {
    Query: {
        hello: () => {
            return 'Hello World'
        },
        getAllPosts: async () => {
            return await Post.find();
        },
        getPost: async (_parent, {id}, _context, _info) => {
            return await Post.findById(id);
        },
    },

    Mutation: {
        createPost: async (parent, args, context, info) => {
            const { title, description, } = args;
            const post = new Post(title, description);
            await post.save();
            return post;
        },
        deletePost: async (parent, args, context, info) => {
            const {id} = args;
            await Post.findByIdAndUpdate(id);
            return 'Ok, post deleted Successfully';
        },
        updatePost: async(parent, args, context, info) => {
            const {id} = args;
            const {title, description} = args.post;
            const post = await Post.findByIdAndUpdate(
                id,
                {title, description},
                {new: true}
            );
        },
    },
};

module.exports = resolvers;
