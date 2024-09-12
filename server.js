const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/messagesDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

// Message schema and model
const messageSchema = new mongoose.Schema({
    content: String,
    date: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

// Routes

// POST route to submit a message
app.post('/messages', async (req, res) => {
    const newMessage = new Message({
        content: req.body.content
    });
    await newMessage.save();
    res.json(newMessage);
});

// GET route to retrieve all messages
app.get('/messages', async (req, res) => {
    const messages = await Message.find().sort({ date: -1 });
    res.json(messages);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
