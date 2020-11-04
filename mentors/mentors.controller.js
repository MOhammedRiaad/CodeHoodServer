const express = require('express');
const router = express.Router();
//const authorize = require('_middleware/authorize')
const Role = require('_helpers/role');
const userService = require('./mentors.service');
//const books = require('../books/book.controller')

// routes
router.get('/',  getAll);
router.get('/:id',  getById);
router.post('/CreateUser', CreateUser);
module.exports = router;


 function CreateUser(req, res, next){
    const { name , title , message ,skills,countryAlpha2Code,country,twitter } = req.body;
    userService.addUser({ name , title , message ,skills,countryAlpha2Code,country,twitter })
    .then(res.json("User Created successfully"))
    .catch(next)
 }


function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(next);
}

function getById(req, res, next) {
    // regular users can get their own record and admins can get any record
    // if (req.params.id !== req.user.id && req.user.role !== Role.Admin) {
    //     return res.status(401).json({ message: 'Unauthorized' });
    // }

    userService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(next);
}


// helper functions

