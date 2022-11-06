const express = require('express');
const body_parse = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const { database_uri, port } = require('./config/config');
// require('dotenv').config();

const app = express();
const server_port = port || 5000;

app.use(cors());
app.use(body_parse.json());

const uri = database_uri;
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

const tasksRouter = require('./routes/tasks');

//Basic route path
app.use('/tasks', tasksRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${server_port}`);
});

//To run the server with nodemon write :- npm run start