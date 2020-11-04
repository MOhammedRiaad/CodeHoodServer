
const db = require('_helpers/db');

module.exports = {
    getAll,
    getById,
    addUser,
};



async function addUser({ name , title , message ,skills,countryAlpha2Code,country,twitter }){
    // check if user is found before 
    const user = await db.Mentors.findOne({ name });
    if (!user) {
       
    const user = new db.Mentors({
        name: name,
        title: title,
        message: message,
        skills:skills,
        countryAlpha2Code: countryAlpha2Code ,
        country : country,
        twitter: twitter

        
    });
         await user.save();
         return 'user created successfully '
        }
        else
        {
            throw 'Username Is found by try another one ';

        }
       
}




async function getAll() {
    const users = await db.Mentors.find();
    return users.map(x => basicDetails(x));
}

async function getById(id) {
    const user = await getUser(id);
    return basicDetails(user);
}


// helper functions

async function getUser(id) {
    if (!db.isValidId(id)) throw 'User not found';
    const user = await db.Mentors.findById(id);
    if (!user) throw 'User not found';
    return user;
}

function basicDetails(user) {
    const {id, name , title , message ,skills,countryAlpha2Code,country,twitter } = user;
    return {id, name , title , message ,skills,countryAlpha2Code,country,twitter };
}

