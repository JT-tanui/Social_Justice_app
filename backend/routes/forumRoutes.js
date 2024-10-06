const express = require('express');
const { getComments, addComment } = require('../controllers/forumController');

const router = express.Router();

router.get('/:petitionId', getComments);
router.post('/:petitionId', addComment);

module.exports = router; 