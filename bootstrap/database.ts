import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const uri = process.env.DB_URI;




export default function(){
console.log(uri);

  if(uri){
    console.log('hello');
    mongoose.connect(uri).then(() => console.log('Connected to database'))
      .catch(err => console.log('Failed to connect to database', err));
  }

};
