const express = require('express');
const {ApolloServer, gql} = require('apollo-server-express');
const mongoose = require('mongoose');

async function startServer() {
const app = express();
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
});

await apolloServer.start()
apolloServer.applyMiddleware({app: app});

await mongoose.connect('mongodb+srv://indexofmayank:0Ai2Om96ZPiQ9lnN@cluster0.uty2iat.mongodb.net/?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
console.log('Mongoose connected');

app.use((req, res) => {
    res.send("Hello from express");
})

app.listen(4000, () => console.log("Server is working on prot: 4000"));
}

startServer()