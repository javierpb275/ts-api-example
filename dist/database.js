"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResult = exports.getClub = void 0;
var clubs = require("../data/clubs.json");
var results = require("../data/results.json");
function getClub(code) {
    var club = clubs.clubs.find(function (club) { return club.code === code; });
    if (!club) {
        throw new Error("Club Not Found!");
    }
    else {
        return club;
    }
}
exports.getClub = getClub;
function getResult(t1, t2) {
    var match = results.matches.find(function (match) { return t1 === match.team1 && t2 === match.team2; });
    if (!match) {
        throw new Error("Match Not Found!");
    }
    else {
        return match;
    }
}
exports.getResult = getResult;
