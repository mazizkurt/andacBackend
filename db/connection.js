const mongoose = require('mongoose');

require('dotenv/config');
mongoose.connect(process.env.MONGODB);
module.exports = mongoose;