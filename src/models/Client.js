import mongoose from 'mongoose';
import { StringDecoder } from 'string_decoder';

// Grab an instance of the Schema object
const Schema = mongoose.Schema;

// Create a new Schema 'Type' for the object to be stored
let Client = new Schema({
    /**
     * The first name of the client
     */
    firstName : {
        type: String
    },
    /**
     * The last name of the client
     */
    lastName : {
        type: String
    },
    /**
     * The address for the client
     */
    address : {
        type: String
    },
    /**
     * The phone number for the client
     */
    phone : {
        type: String
    },
    /**
     * 
     */
    email : {
        type: String,
        lowercase: true
    },
    birthDate: { 
        type: Date
    },
    intakeDate: {
        type: Date
    },
    releaseDate : {
        type: Date
    },
    createdBy : {
        type: String
    },
    createDate :{
        type: Date
    },
    modifiedBy : {
        type: String,

    },
    modifyDate :{
        type: Date,
        default : null
    }
});

export default mongoose.model('Client', Client);