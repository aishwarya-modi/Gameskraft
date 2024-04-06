const Chat = require('../schemas/chatSchema');
const mongoose = require('mongoose');

async function createChat(req, res) {
    const { chatName, groupchat, groupAdmin, users } = req.body;
    const chat = new Chat({ chatName, groupchat, groupAdmin, users });

    try {
        const newChat = await chat.save();
        res.json(newChat);
    } catch (error) {
        res.status(500).json({ error: 'Error while creating new chat' });
    }
}

async function getChat(req, res) {
    const { chatID } = req.params;

    try {
        const chat = await Chat.findById(chatID);
        res.json(chat);
    } catch (error) {
        res.status(500).json({ error: 'Error while fetching chat' });
    }
}

// async function getChats(req, res) {
//     const { userID } = req.params;

//     try {
//         const chats = await Chat.find({ users: userID });
//         res.json(chats);
//     } catch (error) {
//         res.status(500).json({ error: 'Error while fetching chats' });
//     }
// }

// async function joinChat(req, res) {
//     const { chatID, userID } = req.body;

//     try {
//         const chat = await Chat.findById(chatID);

//         if (chat.users.includes(userID)) {
//             return res.status(400).json({ error: 'Already joined chat' });
//         }

//         chat.users.push(userID);
//         await chat.save();

//         res.json(chat);
//     } catch (error) {
//         res.status(500).json({ error: 'Error while joining chat' });
//     }
// }

// async function leaveChat(req, res) {
//     const { chatID, userID } = req.body;

//     try {
//         const chat = await Chat.findById(chatID);

//         const userIndex = chat.users.indexOf(userID);
//         if (userIndex !== -1) {
//             chat.users.splice(userIndex, 1);
//             await chat.save();
//         }

//         res.json(chat);
//     } catch (error) {
//         res.status(500).json({ error: 'Error while leaving chat' });
//     }
// }

// async function deleteChat(req, res) {
//     const { chatID } = req.params;

//     try {
//         await Chat.findByIdAndRemove(chatID);
//         res.json({ message: 'Chat deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ error: 'Error while deleting chat' });
//     }
// }

async function sendMessage(req, res) {
    const { chatID, message } = req.body;

    try {
        const chat = await Chat.findById(chatID);
        chat.messages.push(message);
        await chat.save();

        res.json(chat);
    } catch (error) {
        res.status(500).json({ error: 'Error while sending message' });
    }
}
