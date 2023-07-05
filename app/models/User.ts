import {Schema,model} from "mongoose";

const Users:Schema = new Schema({
    
    "username":String,
    "email":String,
    "password":String,


});


export default model("users",Users);