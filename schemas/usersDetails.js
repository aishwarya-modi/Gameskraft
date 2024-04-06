const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userID: String,
    latitude: Number,
    longitude: Number,
    userName: String,
    emailID: String,
    password : String,
    favoriteGenre: String,
    preferredPlatform: String,
    connections: [String],
    games: [{
        gameID: String,
        skillScore: Number,
        interestLevel: Number
    }],
    geohash_1: String,
    geohash_2: String,
    geohash_3: String,
    geohash_4: String,
    geohash_5: String,

     // other user fields if needed
});

module.exports = mongoose.model('User', userSchema);


const gameSchema = new mongoose.Schema({
    gameID: String,
    gameName: String
});

mongoose.model('Game', gameSchema);

const chatSchema = new mongoose.Schema({
    chatID: String,
    chatName: String,
    groupchat: Boolean,
    groupAdmin: String,
    users: [String]
});

mongoose.model('Chat', chatSchema);


const messageSchema = new mongoose.Schema({
    chatID: String,
    messageID: String,
    sender: String,
    receiver: String,
    timestamp: String,
    content: String
});

mongoose.model('Message', messageSchema);



