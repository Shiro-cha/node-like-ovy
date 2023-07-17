"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDatabase = void 0;
//import dependancies
var mongoose_1 = __importDefault(require("mongoose"));
var MongoDatabase = /** @class */ (function () {
    function MongoDatabase() {
        this.databaseName = process.env.DATABASENAME;
        this.databaseHost = process.env.DB_HOST;
        this.databasePort = process.env.DB_PORT;
        this.username = process.env.DB_USERNAME;
        this.password = process.env.DB_PASSWORD;
    }
    MongoDatabase.getDatabaseInstance = function () {
        return MongoDatabase.databaseInstance ? MongoDatabase.databaseInstance : new MongoDatabase();
    };
    MongoDatabase.prototype.connexion = function () {
        var rootUri = "mongodb".concat(this.databasePort ? "" : "+srv", "://").concat(this.databaseHost, ":").concat(this.databasePort).concat(this.username && this.password ? "@" + this.username + ":" + this.password : "", "/").concat(this.databaseName ? this.databaseName : "");
        mongoose_1.default.connect(rootUri);
        mongoose_1.default.connection.once("open", function () {
            console.log("Connexion has been made");
        }).on("error", function (err) {
            console.log("Connexion error", err);
        });
    };
    MongoDatabase.prototype.disconnect = function () {
        mongoose_1.default.disconnect();
    };
    return MongoDatabase;
}());
exports.MongoDatabase = MongoDatabase;
