const express = require('express');
const router = express.Router();
const MatchController = require('../controllers/MatchController');
const UserController = require('../controllers/UserController');

// routes for UserController
router.post('/createUser', UserController.createUser);
router.put('/updateUser', UserController.updateUser);
router.get('/getUser', UserController.getUser);
router.delete('/deleteUser', UserController.deleteUser);

// routes for MatchController
router.get('/getMatches', MatchController.getMatches);
module.exports = router;
