// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Use body parser
app.use(bodyParser.json());

// Create array to store comments
const comments = [
  { id: 1, author: 'John Doe', content: 'Hello World!' },
  { id: 2, author: 'Jane Doe', content: 'Hi, planet!' }
];

// Handler to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Handler to get a specific comment
app.get('/comments/:id', (req, res) => {
  const comment = comments.find(c => c.id === parseInt(req.params.id));
  if (!comment) return res.status(404).send('The comment with the given ID was not found');
  res.json(comment);
});

// Handler to create a new comment
app.post('/comments', (req, res) => {
  const comment = {
    id: comments.length + 1,