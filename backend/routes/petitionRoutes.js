const express = require('express');
const { getPetitions, createPetition } = require('../controllers/petitionController');

const router = express.Router();

router.get('/', getPetitions);
router.post('/', createPetition);

module.exports = router; 

