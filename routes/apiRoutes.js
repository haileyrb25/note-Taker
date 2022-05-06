//require the router and db items needed
const router = require("express").Router()
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');


router.get("/notes", (req, res)=>{
    res.sendFile(path.join(__dirname, "../db/db.json"));
})

router.post("/notes", ({body}, res)=>{

    console.log("Info from frontend", body)

    const { title, text} = body;

    const newNote = {
        title,
        text,
        id: uuidv4()
    }
});


module.exports = router;