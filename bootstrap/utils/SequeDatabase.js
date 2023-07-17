"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequeDatabase = void 0;
var SequeDatabase = /** @class */ (function () {
    function SequeDatabase() {
        this.databaseName = process.env.DATABASENAME;
        this.databaseHost = process.env.DB_HOST;
        this.databasePort = process.env.DB_PORT;
        this.username = process.env.DB_USERNAME;
        this.password = process.env.DB_PASSWORD;
    }
    SequeDatabase.getDatabaseInstance = function () {
        return SequeDatabase.databaseInstance ? SequeDatabase.databaseInstance : new SequeDatabase();
    };
    SequeDatabase.prototype.connexion = function () {
    };
    SequeDatabase.prototype.disconnect = function () {
    };
    return SequeDatabase;
}());
exports.SequeDatabase = SequeDatabase;
