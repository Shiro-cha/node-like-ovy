"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var app_1 = __importDefault(require("./bootstrap/app"));
var database_1 = __importDefault(require("./bootstrap/database"));
var cors_1 = __importDefault(require("./bootstrap/cors"));
var dotenv_1 = __importDefault(require("dotenv"));
//configure enviroment variabale
dotenv_1["default"].config();
//init the cors configuration
app_1["default"].use(cors_1["default"]);
//start the server 
if (process.env.PORT) {
    app_1["default"].listen(process.env.PORT, function () {
        console.log("Server start at port ".concat(process.env.PORT));
        //after server succesfylly started connect to the database
        (0, database_1["default"])();
    });
}
else {
    console.log("The server port is not configured as well");
}
