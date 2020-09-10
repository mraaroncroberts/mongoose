import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

// Our models
import Client from './models/Client';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

// Connect to our Atlas instance
// https://docs.mongodb.com/manual/reference/connection-string/
// Connection Options:  https://mongoosejs.com/docs/4.x/docs/connections.html
mongoose.connect(
    'mongodb+srv://schpeyeder-web-user:NKgx5GUnUnvccim1@schpeyeder-mongo.d98wp.gcp.mongodb.net/schpeyeder-db?retryWrites=true&w=majority',
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });

const connection = mongoose.connection;

// Open the connection 
connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

/**
 * Client Routes
 */
// GET
router.route('/client').get((request, response) => {
    //
    // Call the find() mehtod on the Mongoose Schema object
    // https://mongoosejs.com/docs/4.x/docs/queries.html
    Client.find((error, clients) => {
        if(error) {
            console.log(error);
        }
        else {
            // send back a json result set
            response.json(clients);
        } 

    })
});
// GET/:id
router.route('/client/:id').get((request, response) => {
    // 
    // Call the findById() method on the Mongoose Schema object
    // https://mongoosejs.com/docs/4.x/docs/queries.html
    Client.findById(request.params.id, (error, client) => {
        if(error){
            console.log(error);
        }
        else{
            response.json(client);
        }
    })
});

// Default route
router.route('/').get((request, response) => {
    response.send('Hello World!');
});

// Define our anchor route
app.use('/api', router);

// Star the server and listen on port 1138
app.listen(4000, () => console.log(`Express server running on port 4000`));