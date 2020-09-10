//src/main.controller.ts

import { Router } from 'express';
import { ClientService } from '../services/client.service';

export class ClientController {
    /**
     * Local instance of the ClientService used to communicate with the data store
     */
    private clientService: ClientService;

    /**
     * Constructrs a new ClientController instance and 
     * configures the routes that map to the Service
     * @param router Express router to add routes into
     */
    constructor(private router: Router) {
        this.clientService = new ClientService();

        //
        // Configure the routes for the Client API
        this.router.route('/clients').get(this.clientService.list);
        this.router.route('/client/:id').get(this.clientService.get);
        this.router.route('/client').post(this.clientService.create)
        this.router.route('/client/:id').put(this.clientService.update);
        this.router.route('/client/:id').delete(this.clientService.delete)          
    }   
}