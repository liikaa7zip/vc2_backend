const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/vc2_db');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('✅ Connected to MongoDB');
});

module.exports = mongoose;
