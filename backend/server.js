const express = require('express');
const http = require('http');
const path = require('path');
const socketIo = require('socket.io');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const petitionRoutes = require('./routes/petitionRoutes');
const forumRoutes = require('./routes/forumRoutes');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Connect to MySQL
connectDB().then(connection => {
  app.locals.db = connection;
});

app.use(express.json());

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/petitions', petitionRoutes);
app.use('/api/forums', forumRoutes);

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Anything that doesn't match the above routes, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

const PORT = process.env.PORT || 3200;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});