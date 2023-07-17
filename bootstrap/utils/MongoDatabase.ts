//import dependancies
import mongoose from "mongoose";


//import interfaces
import { DatabaseFactory } from "./DatabaseFactory";


export class MongoDatabase implements DatabaseFactory{

    private static databaseInstance: MongoDatabase | null | undefined;
    //proprety definition
    databaseName: string | undefined;
    databaseHost: string | undefined;
    databasePort: string | undefined;
    username: string | undefined;
    password: string | undefined;
    
    private constructor(){
        
        this.databaseName=process.env.DATABASENAME;
        this.databaseHost=process.env.DB_HOST;
        this.databasePort=process.env.DB_PORT;
        this.username = process.env.DB_USERNAME;
        this.password = process.env.DB_PASSWORD;
    }

    public static getDatabaseInstance(){
        return MongoDatabase.databaseInstance ? MongoDatabase.databaseInstance:new MongoDatabase();
    }
     
    connexion():void{
    const rootUri: string =`mongodb${this.databasePort?"":"+srv"}://${this.databaseHost}:${this.databasePort}${this.username && this.password?"@"+this.username+":"+this.password:""}/${this.databaseName?this.databaseName:""}` ;
    mongoose.connect(rootUri);

    mongoose.connection.once("open",function(){

      console.log("Connexion has been made");
      

    }).on("error",function(err){

      console.log("Connexion error",err);
      
    });
    }

    disconnect():void{
        mongoose.disconnect();
    }
}