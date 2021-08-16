"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
function createServer() {
    var app = express_1.default();
    app.get("/results/:team1/:team2", function (req, res) {
        res.send("Result of " + req.params.team1 + " vs " + req.params.team2);
    });
    return app;
}
exports.default = createServer;
