"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
/**Controller application here**/
var ApiController_1 = __importDefault(require("../app/controllers/ApiController"));
/**Routes end here**/
var router = (0, express_1.Router)();
function default_1() {
    /**
     *
     * Define your routes here
     *
     * **/
    router.get("/hello", ApiController_1.default);
    /**Routes end here**/
    return router;
}
exports.default = default_1;
;
