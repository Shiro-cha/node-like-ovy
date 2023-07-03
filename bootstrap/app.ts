import express,{Express,Router} from "express";
import api from "../routes/api";
import web from "../routes/web";

const app:Express = express();

// Définir les middlewares par défaut


//Définir ici les middleware personnalisé


//appeler ici les routes
/** Route for api **/
  app.use("/api",api());

/** Route for web **/
  app.use("/",web());


export default app;
