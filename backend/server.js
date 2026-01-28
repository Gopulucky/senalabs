const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API Routes in-memory "database"
const contacts = [];
const subscriptions = [];

// Contact Endpoint
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required.' });
    }

    const newContact = { id: Date.now(), name, email, message, date: new Date() };
    contacts.push(newContact);

    console.log('[New Contact Submission]:', newContact);
    res.json({ success: true, message: 'Message received!' });
});

// Join/Subscription Endpoint
app.post('/api/join', (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ error: 'Email is required.' });
    }

    const newSub = { id: Date.now(), email, date: new Date() };
    subscriptions.push(newSub);

    console.log('[New Subscription]:', newSub);
    res.json({ success: true, message: 'Subscribed successfully!' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
