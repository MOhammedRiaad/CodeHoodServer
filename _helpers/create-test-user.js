const Role = require('./role');
const bcrypt = require('bcryptjs');

const db = require('./db');

module.exports = {createTestUser ,createTestLogin};

async function createTestUser() {
    // create test user if the db is empty
    if ((await db.Mentors.countDocuments({})) === 0) {
        const user = new db.Mentors({
            name: "test",
            title: "Front End developer",
            message: "I can help you answer questions and explain difficuilt systems in simple terms.",
            skills: ["test", "test", "test" ,"test"],
            countryAlpha2Code: "EG",
            country: "Egypt",
            twitter: "test"
        });
        await user.save();
    }
}
async function createTestLogin() {
    // create test user if the db is empty
    if ((await db.User.countDocuments({})) === 0) {
        const user = new db.User({
            firstName: 'Test',
            lastName: 'User',
            username: 'test',
            passwordHash: bcrypt.hashSync('test', 10),
            role: Role.Admin
        });
        await user.save();
    }
}