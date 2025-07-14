const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const User = require('./models/User'); // required to sync table

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));

sequelize.sync({ alter: true }).then(() => {
  console.log('Database connected and tables synced');
  app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
  });
});
