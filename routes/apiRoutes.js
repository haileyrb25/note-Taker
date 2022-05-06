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
    fs.readFile(path.join(__dirname, "../db/db.json"), 'utf-8', (err, data)=>{
        console.log("data from db.json", data)
        const parsedNotes = JSON.parse(data)
        // console.log("parsed data", parsedNotes)
        parsedNotes.push(newNote)
        console.log("parsed notes with new note", parsedNotes)

        fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(parsedNotes), (err)=>{
            if(err) throw err;
            console.log("note has been saved to db!")
        })
    })
    res.sendFile(path.join(__dirname, "../db/db.json"));

})

router.delete("/notes/:id", (req, res)=>{
 

    fs.readFile(path.join(__dirname, "../db/db.json"), "utf-8", (err, data)=>{

        const parsedNotes = JSON.parse(data);

        for(let i = 0; i < parsedNotes.length; i++){
            if(parsedNotes[i].id === req.params.id){
                parsedNotes.splice(i, 1)
            }
        }
        fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(parsedNotes), (err)=>{
            if(err) throw err;
            console.log("note has been deleted from db!")
        })
        res.sendFile(path.join(__dirname, "../db/db.json"));
    })

})


module.exports = router;