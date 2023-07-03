"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var api_1 = __importDefault(require("../routes/api"));
var web_1 = __importDefault(require("../routes/web"));
var app = (0, express_1.default)();
// Définir les middlewares par défaut
//Définir ici les middleware personnalisé
//appeler ici les routes
/** Route for api **/
app.use("/api", (0, api_1.default)());
/** Route for web **/
app.use("/", (0, web_1.default)());
exports.default = app;
