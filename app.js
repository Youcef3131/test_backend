
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

// Import required modules
const express = require('express');

// Create an instance of Express
const app = express();
const PORT = 3000;

// Middleware to parse JSON request body
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
    res.send('Welcome to my REST API!');
});


app.get('/users', (req, res) => {

  const usres=prisma.user.findMany()
  res.status(200).json(usres);
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
