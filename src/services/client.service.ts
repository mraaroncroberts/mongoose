//src/services/mongoose.service.ts

import { Request, Response } from "express";
import { Client } from "../models/client";
import { MongooseDocument } from "mongoose";

/**
 * Client Service class
 */
export class ClientService {
    /**
     * Welcome message services
     * @param req
     * @param res 
     */
    public welcomeMessage(req: Request, res: Response) {
        return res.status(200).send("Welcome to the REST API for Clients");
    }

    /**
     * List all client records
     * @param req Request object
     * @param res Resonse object
     */
    public list(req: Request, res: Response){
        Client.find({}, (error: Error, client: MongooseDocument) => {
            if(error){
                res.send(error);
            }
            res.json(client);
        });
    }

    /**
     * Gets a Client that matches the id
     * @param req 
     * @param res 
     */
    public get(req: Request, res: Response){
        const id = req.params.id;
        Client.findById(id, (error: Error, client: MongooseDocument) => {   
            if( error){
                res.send(error);
            }   
            res.json(client);         
        });
    }

    /**
     * Creates a new Client object
     * @param req Request object that contains a Client instance in the body
     * @param res Response object
     */
    public create(req: Request, res: Response){
        const client = new Client(req.body);
        client.save((error: Error, client: MongooseDocument) => {
            if( error ){
                res.send(error);        
            }
            res.json(client);
        });
    }

    /**
     * Deletes a Client object
     * @param req Request object containing the id for the document to remove
     * @param res Response object
     */
    public delete(req: Request, res: Response) {
        const id = req.params.id;                   
        Client.findByIdAndDelete( id, req.body, (error: Error, deleted: any) => {
            if(error){
                res.send(error);
            }

            const message = deleted ? 'Deleted successfully' : 'Client not found!';
            res.send(message);
        });
    }

    public update(req: Request, res: Response){
        const id = req.params.id;                   
        Client.findByIdAndUpdate( id, req.body, (error: Error, updated: any) => {
            if(error){
                res.send(error);
            }

            const message = updated ? 'Updated successfully' : 'Client not found!';
            res.send(message);
        });
    }
}