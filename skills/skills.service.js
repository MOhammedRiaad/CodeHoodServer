const db = require('_helpers/db');


module.exports = {
    getAll,
   // getById,
   // addUser,
};

async function getAll(){

    const skills = await db.Skills.find()
    if(skills) return skills
        throw 'no Skills is here' 
}