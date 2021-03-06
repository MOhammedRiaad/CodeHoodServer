const config = require('config.json');
const mongoose = require('mongoose');
const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
mongoose.connect(process.env.MONGODB_URI || config.localdb, connectionOptions);
mongoose.Promise = global.Promise;

module.exports = {
    User: require('users/user.model'),
    Mentors: require('mentors/mentors.model'),
    Skills: require('skills/skills.model'),
    RefreshToken: require('users/refresh-token.model'),
    isValidId
};

function isValidId(id) {
    return mongoose.Types.ObjectId.isValid(id);
}