const mongoose = require('mongoose');
const database = require('./environment/development');

const connectDatabase = async () => {
  try {
    await mongoose.connect(database.mongo.uri, database.mongo.parserConfig);
    console.log('MongoDB successfully connected...');
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDatabase;
