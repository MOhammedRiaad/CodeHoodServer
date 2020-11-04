const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, required: true },
    title: { type: String, required: false },
    message: { type: String, unique: true, required: false },
    skills: { type: Array, required: false },
    countryAlpha2Code: { type: String, required: false },
    country: { type: String, required: false },
    twitter: { type: String, required: false },

});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        // remove these props when object is serialized
        delete ret._id;
        delete ret.passwordHash;
    }
});

module.exports = mongoose.model('Mentors', schema);