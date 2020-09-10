import mongoose, { Schema } from 'mongoose';

//
// Schema types: https://mongoosejs.com/docs/4.x/docs/schematypes.html
const ClientSchema: Schema = new mongoose.Schema({
    firstName : { type: String, required: true },
    lastName : { type: String , required: true },
    address : { type: String, required: true },
    phone : { type: String, required: true },
    email : { type: String, lowercase: true, required: false },
    birthDate: { type: Date, required: true },
    intakeDate: { type: Date },
    releaseDate : { type: Date },
    status : { type: String, required: true },
    createdBy : { type: String, required: true },
    createDate :{ type: Date, required: true },
    modifiedBy : { type: String },
    modifyDate :{ type: Date }
});

export const Client = mongoose.model("Client", ClientSchema);