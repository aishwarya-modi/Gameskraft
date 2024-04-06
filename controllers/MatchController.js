const User = require('../schemas/usersDetails');

async function getMatches(req, res) {
    var latitude = req.query.latitude;
    var longitude = req.query.longitude;
    var radius = req.query.radius;
    console.log(req.query);

    if (isNaN(latitude) || isNaN(longitude)) {
        return res.status(400).json({ error: 'Invalid query parameters ',latitude,longitude });
    }
    
    try {
        if(latitude<0){
            const matches = await User.find({
                latitude: latitude,
                longitude: longitude
                //latitude: { $lte: latitude + radius, $gte: latitude - radius },
                //longitude: { $gte: longitude - radius, $lte: longitude + radius }
            });
            const matchedUserIds = matches.map(match => match.userName);
        //const matchedUserIds = matches.map(match => match.userName, favoriteGenre);
        res.json(matchedUserIds);
        }else if(longitude<0){
            const matches = await User.find({
                latitude: parseFloat(latitude),
                longitude: parseFloat(longitude)
                //latitude: { $gte: latitude - radius, $lte: latitude + radius },
                //longitude: { $lte: longitude + radius, $gte: longitude - radius }
            });
            const matchedUserIds = matches.map(match => match.userName);
        //const matchedUserIds = matches.map(match => match.userName, favoriteGenre);
        res.json(matchedUserIds);
        }else{
        const matches = await User.find({
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude)
            //latitude: { $gte: latitude - radius, $lte: latitude + radius },
            //longitude: { $gte: longitude - radius, $lte: longitude + radius }
        });
        const matchedUserIds = matches.map(match => match.userName);
        //const matchedUserIds = matches.map(match => match.userName, favoriteGenre);
        res.json(matchedUserIds);
    }

       // const matchedUserIds = matches.map(match => match.userName);
        //const matchedUserIds = matches.map(match => match.userName, favoriteGenre);
        //res.json(matchedUserIds);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    getMatches
};
