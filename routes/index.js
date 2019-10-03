var express = require('express');
var router = express.Router();

const UserRouter = require('./UserRouter')
const NoteRouter = require('./NoteRouter');

router.use('/api/users', UserRouter);
router.use('/api/notes', NoteRouter);

module.exports = router;
