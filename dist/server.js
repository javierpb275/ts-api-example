"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var database_1 = require("./database");
function createServer() {
    var app = express_1.default();
    app.get("/results/:team1/:team2", function (req, res) {
        try {
            var team1 = database_1.getClub(req.params.team1);
            var team2 = database_1.getClub(req.params.team2);
            var match = database_1.getResult(team1.name, team2.name);
            res.json({
                match: match
            });
        }
        catch (e) {
            res.status(400).json({
                error: e
            });
        }
    });
    return app;
}
exports.default = createServer;
