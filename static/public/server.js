const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); 
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'blog.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'profile.html'));
});

app.post('/submit-contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Contact Form Submitted:
    Name: ${name}
    Email: ${email}
    Message: ${message}`);
    res.send('Thank you for contacting us! We will get back to you soon.');
});

app.post('/submit-blog', (req, res) => {
    const { title, content } = req.body;
    console.log(`Blog Post Submitted:
    Title: ${title}
    Content: ${content}`);
    res.send('Thank you for submitting your blog post!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
