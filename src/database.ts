import { Club, Clubs, Match, Matches } from "./types";

const clubs: Clubs = require("../data/clubs.json")
const results: Matches = require("../data/results.json")

export function getClub(code: string): Club {
    const club = clubs.clubs.find(club => club.code === code);
    if (!club) {
        throw new Error("Club Not Found!");
    } else {
        return club;
    }
}

export function getResult(t1: string, t2: string): Match {
    const match = results.matches.find(match => t1 === match.team1 && t2 === match.team2);
    if (!match) {
        throw new Error("Match Not Found!");
    } else {
        return match;
    }
}