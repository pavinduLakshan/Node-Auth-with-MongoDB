const express = require('express');
const router = express.Router();
var NoteController = require('../controllers/NoteController')

router.get('/', function(req, res, next) {
  res.send(NoteController.getAllNotes())
});


module.exports = router;