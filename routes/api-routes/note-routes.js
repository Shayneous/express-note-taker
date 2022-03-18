const router = require("express").Router();
const {
    notes
} = require('../../db/db');
const {
    makeNewNote,
} = require('../../lib/noteFunctions');


router.get('/notes', (req, res) => {
    let save = notes;
    res.json(save);
})

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let note = makeNewNote(req.body, notes);
    res.json(note);
})

module.exports = router;