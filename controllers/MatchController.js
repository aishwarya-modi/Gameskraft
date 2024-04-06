const User = require('../schemas/usersDetails');

async function getMatches(req, res) {
    const { latitude, longitude, radius } = req.query;

    try {
        const matches = await User.find({
            latitude: { $gte: latitude - radius, $lte: latitude + radius },
            longitude: { $gte: longitude - radius, $lte: longitude + radius }
        }).select('_id');

        const matchedUserIds = matches.map(match => match._id);
        res.json(matchedUserIds);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    getMatches
};
