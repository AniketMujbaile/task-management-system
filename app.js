require('dotenv').config();
const express = require('express');
const { connect } = require('./config/db');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(express.json());

// Connect to MongoDB
connect();

// Routes
app.use('/tasks', taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
