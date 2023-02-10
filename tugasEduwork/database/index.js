const mongoose = require('mongoose');
const { dbHost, dbPort, dbUser } = require('../app/config');

// Database mongodb compass : mongodb://127.0.0.1:27017/tugasEduwork
mongoose.connect(`mongodb://${dbHost}:${dbPort}/${dbUser}`)
const db = mongoose.connection;

module.exports = db;