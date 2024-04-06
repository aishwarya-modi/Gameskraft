const express = require('express');
const router = express.Router();
const MatchController = require('../controllers/MatchController');
const UserController = require('../controllers/UserController');
const GameController = require('../controllers/GameController');
const MessageController = require('../controllers/MessageController');
const ChatController = require('../controllers/chatController');
//const Chat = require('../schemas/chatSchema');

// routes for UserController
router.post('/createUser', UserController.createUser);
router.put('/updateUser', UserController.updateUser);
router.get('/getUser', UserController.getUser);
router.delete('/deleteUser', UserController.deleteUser);

// routes for MatchController
router.get('/getMatches', MatchController.getMatches);

//routes for GameController
/*router.post('/createGame', GameController.createGame);

// routes for MessageController
router.post('/createMessage', MessageController.createMessage);

// routes for ChatController
router.post('/createChat', ChatController.createChat);
router.get('/getChat', ChatController.getChat);*/




module.exports = router;
