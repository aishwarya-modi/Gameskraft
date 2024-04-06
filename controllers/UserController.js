const User = require('../schemas/usersDetails');
const mongoose = require('mongoose');

async function createUser(req, res) {
    const { latitude, longitude, userName, emailID } = req.body;
    if (!res) return res.status(400).json({ error: 'Request body missing' });
    const { userID, latitude, longitude, userName, emailID, password, favoriteGenre, preferredPlatform } = res;
    if (!userID || !latitude || !longitude || !userName || !emailID || !password || !favoriteGenre || !preferredPlatform) return res.status(400).json({ error: 'Request body missing' });

    try {
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Error while creating new user' });
    }
}





async function updateUser(req, res) {
    const { id } = req.params;
    const { latitude, longitude, userName, emailID } = req.body;
    const { userID, latitude, longitude, userName, emailID, password, favoriteGenre, preferredPlatform } = req.body;

    try {
        const user = await User.findByIdAndUpdate(id, { latitude, longitude, userName, emailID }, { new: true });
        const user = await User.findByIdAndUpdate(id, { userID, latitude, longitude, userName, emailID, password, favoriteGenre, preferredPlatform }, { new: true });
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
