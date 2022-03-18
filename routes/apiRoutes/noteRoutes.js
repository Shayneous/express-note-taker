const router = require("express").Router();
const {
    notes
} = require('../../db/db');
const {
    makeNewNote,
    deleteNote
} = require('../../lib/noteFunctions');

//Get note
router.get('/notes', (req, res) => {
    let save = notes;
    res.json(save);
})

//Post note
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let note = makeNewNote(req.body, notes);
    res.json(note);
})

//Delete note
router.delete('/notes/:id', (req, res) => {
    deleteNote(notes, req.params.id);
    res.json(notes);
})


module.exports = router;