/*const Game = require('../schemas/gameSchema');
const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    gameID: String,
    gameName: String
});

module.exports = {
    getGames: async (req, res) => {
        try {
            const games = await Game.find();
            res.json(games);
        } catch (error) {
            res.status(500).json({ error: 'Error while fetching games' });
        }
    },

    getGame: async (req, res) => {
        const { gameID } = req.params;

        try {
            const game = await Game.findById(gameID);
            res.json(game);
        } catch (error) {
            res.status(500).json({ error: 'Error while fetching game' });
        }
    }
};*/





















































