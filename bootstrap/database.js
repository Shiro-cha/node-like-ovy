"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mongoose_1 = __importDefault(require("mongoose"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
var uri = process.env.DB_URI;
function default_1() {
    console.log(uri);
    if (uri) {
        console.log('hello');
        mongoose_1["default"].connect(uri).then(function () { return console.log('Connected to database'); })["catch"](function (err) { return console.log('Failed to connect to database', err); });
    }
}
exports["default"] = default_1;
;
