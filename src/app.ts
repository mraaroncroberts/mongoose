//src/app.ts

import express, { Application, Router, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import { ClientController } from './controllers/client.controller';
import { MONGO_DB_CONN, BASE_URI, MAX_BODY_REQUEST } from './constants/mongoose.constants';

/**
 * App class 
 */
class App {
    /**
     *  Express Application instance variable
     */
    public app : Application;
    /**
     * Express Router instance variable
     */
    public router: Router;
    /**
     * Client controller which defines routes for Clients
     */
    public clientController: ClientController;

    /**
     * Constructs a new App instance
     */
    constructor() {
        this.app = express();
        this.router = express.Router();

        this.setAppConfig();        
        this.setMongoDbConfig();
        
        //
        // Intialize our controllers
        //                
        this.clientController = new ClientController(this.router);
                
         // Configure our app to use the router
        this.app.use(BASE_URI, this.router);
    }

    /**
     * Sets the config for the application 
     */
    private setAppConfig() {
        //Allows us to receive requests with data in json format
        this.app.use(bodyParser.json({ limit: MAX_BODY_REQUEST }));

        //Allows us to receive requests with data in x-www-form-urlencoded format
        this.app.use(bodyParser.urlencoded({ limit: MAX_BODY_REQUEST, extended:true}));

        //Enables cors   
        this.app.use(cors());
    }
    /**
     * Configures the mongodb connection and setup
     */
    private setMongoDbConfig(){
        //
        // Use native promises: https://mongoosejs.com/docs/4.x/docs/promises.html
        mongoose.Promise = global.Promise;
        //
        // Connection Options and Settings: https://mongoosejs.com/docs/4.x/docs/connections.html
        mongoose.connect(MONGO_DB_CONN,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .catch((error) => {
            console.log('A connection error has occured attempting to connect to the MongoDB instance!', error);
        });

        let db = mongoose.connection;

        //
        // Configure error handling for errors after connection
        db.on("error", (error) => {
            console.log('An error has occured with the MongoDB instance!', error)
        });
        
        db.once("open", () => {
            console.log('MongoDB database connection established successfully!');
        });
    }
}

export default new App().app;