import express from "express";
import { getClub, getResult } from "./database";

export default function createServer() {
    const app = express();

    app.get("/results/:team1/:team2", (req, res) => {
        try {
            let team1 = getClub(req.params.team1)
            let team2 = getClub(req.params.team2)
            let match = getResult(team1.name, team2.name);
            res.json({
                match
            })
        } catch (e) {
            res.status(400).json({
                error: e
            })
        }
    });

    return app;
}
