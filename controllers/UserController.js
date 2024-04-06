const User = require('../schemas/usersDetails');
const mongoose = require('mongoose');

async function createUser(req, res) {
    const { userID, latitude, longitude, userName, emailID, password, favoriteGenre, preferredPlatform, connections, games, geohash_1, geohash_2, geohash_3, geohash_4, geohash_5 } = req.body;
    if (!userID || !latitude || !longitude || !userName || !emailID || !password || !favoriteGenre || !preferredPlatform || !connections || !games || !geohash_1 || !geohash_2 || !geohash_3 || !geohash_4 || !geohash_5) return res.status(400).json({ error: 'Request body missing' });

    const newUser = new User({
        userID,
        latitude,
        longitude,
        userName,
        emailID,
        password,
        favoriteGenre,
        preferredPlatform,
        connections,
        games,
        geohash_1,
        geohash_2,
        geohash_3,
        geohash_4,
        geohash_5
    });

    try {
        const savedUser = await newUser.save();
        res.json(savedUser);
    } catch (error) {
        res.status(500).json({ error: 'Error while creating new user' });
    }
}





async function updateUser(req, res) {
    const { id } = req.params;
    const { latitude, longitude, userName, emailID, favoriteGenre, preferredPlatform, connections, games, geohash_1, geohash_2, geohash_3, geohash_4, geohash_5 } = req.body;

    try {
        const user = await User.findByIdAndUpdate(id, { latitude, longitude, userName, emailID, favoriteGenre, preferredPlatform, connections, games, geohash_1, geohash_2, geohash_3, geohash_4, geohash_5 }, { new: true });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Error while updating User' });
    }
}

async function getUser(req, res) {
    const { id } = req.params;

    try {
        const user = await User.findById(id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Error while fetching User' });
    }
}

async function deleteUser(req, res) {
    const { id } = req.params;

    try {
        await User.findByIdAndRemove(id);
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error while deleting User' });
    }
}



module.exports = {
    createUser,
    updateUser,
    getUser,
    deleteUser
};
