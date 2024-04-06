/*const Message = require('../schemas/messageSchema');
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    chatID: String,
    messageID: String,
    sender: String,
    receiver: String,
    timestamp: String,
    content: String
});

const Message = mongoose.model('Message', messageSchema);

module.exports = {
    async createMessage(req, res) {
        const message = new Message(req.body);

        try {
            const newMessage = await message.save();
            res.json(newMessage);
        } catch (error) {
            res.status(500).json({ error: 'Error while creating new message' });
        }
    },

    async getMessages(req, res) {
        const { chatID } = req.params;

        try {
            const messages = await Message.find({ chatID }).sort({ timestamp: 'desc' });
            res.json(messages);
        } catch (error) {
            res.status(500).json({ error: 'Error while fetching messages' });
        }
    }
};*/
