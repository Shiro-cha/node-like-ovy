import { Router } from "express";
import { Express } from "express";
import api from "../../routes/api";
import web from "../../routes/web";

const router = Router();



export default function(app:Express):void{

    app.use("/api",function(req,res,next):void{

        api(router);
        next();

    });
    app.use("/",function(req,res,next):void{

        web(router);
        next();

    });

};