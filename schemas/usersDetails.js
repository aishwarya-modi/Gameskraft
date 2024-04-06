const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    latitude: Number,
    longitude: Number,
    userName: String,
    emailID: String,
    // other user fields if needed
});


// const locationSchema = new mongoose.Schema({
//     latitude: Number,
//     longitude: Number
// });

// mongoose.model('Location', locationSchema);

module.exports = mongoose.model('User', userSchema);
