
import app from './bootstrap/app';
import connect from './bootstrap/database';
import cors from './bootstrap/cors';
import dotenv from "dotenv";


//configure enviroment variabale
dotenv.config();

//init the cors configuration
app.use(cors);




//start the server 

if(process.env.PORT){

    app.listen(process.env.PORT,function():void{

        console.log(`Server start at port ${process.env.PORT}`);
        
        //after server succesfylly started connect to the database
        connect();
        
    });

}else{

    console.log("The server port is not configured as well");
    
   

}
