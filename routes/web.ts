import { Router } from "express";

//import from controllers folder
import ApiController from "../app/controllers/ApiController";


export default function(router:Router):void{

   /**
    * 
    * Define your routes here
    * 
    * **/ 

   router.get("/hello",ApiController);

   

};