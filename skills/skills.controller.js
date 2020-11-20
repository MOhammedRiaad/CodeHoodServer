const express = require('express');
const router = express.Router();
const skillsService = require('./skills.service');


// routes
router.get('/',  getAll);
//router.get('/:id',  getById);
//router.post('/addskills', addSkills);
module.exports = router;

function getAll(req , res , next){

    skillsService.getAll().then(skill => res.json(skill)).catch(next);
}