const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

// Configure Nodemailer
const transporter = nodemailer.createTransport({
    service: 'Gmail', 
    auth: {
        user: 'vukosilisam@gmail.com', 
        pass: 'VukosiLisa2001',  
    },
});

app.post('/send-email', (req, res) => {
    const { email, name } = req.body;

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Welcome to the University Chat Bot',
        text: `Hello ${name},\n\nYou are now chatting with the university bot. How can we assist you today?\n\nBest regards,\nUniversity Chatbot Team`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
