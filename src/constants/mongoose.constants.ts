//src/constants/pokeApi.constants.ts
/**
 * Port number for the Node application to serve on
 */
export const PORT : number = 4000;
/**
 * MongoDB Connection string
 */
export const MONGO_DB_CONN : string = 'mongodb+srv://schpeyeder-web-user:NKgx5GUnUnvccim1@schpeyeder-mongo.d98wp.gcp.mongodb.net/schpeyeder-db?retryWrites=true&w=majority';
/**
 * The BASE_URI that will serve routes for the application
 */
export const BASE_URI : string =  '/api';
/**
 * Specifies the max body request size for the express application.  Value set in bytes, or passed to byte parser.
 */
export const MAX_BODY_REQUEST : string = '50mb';

