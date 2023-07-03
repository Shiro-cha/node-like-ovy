import {  Router } from "express";

/**Controller application here**/
import ApiController from "../app/controllers/ApiController";

/**Routes end here**/

const router:Router = Router();

export default function():Router{

   /**
    *
    * Define your routes here
    *
    * **/

    router.get("/hello",ApiController);



    /**Routes end here**/
    return router;
};
