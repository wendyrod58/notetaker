const router = require('express').Router(); 
const fs = require('fs'); //File System Node.js 
const fileName = './db/db.json'; 

//GET MY NOTES  -"/api/notes"
router.get("/notes", (req,res)=>{
    console.log("Inside the API Get routes "); 

    fs.readFile(fileName, 'utf8', function(err, data){
      
        if(err) throw err; 

        // Display the file content
        console.log(data);
        //Covert it back to JSON object 
        const notes = JSON.parse(data); 
        console.log(notes); 
        //send it back to html page 
        res.json(notes);
    });
      
    console.log('readFile called');
}); 

//CREATE and SAVE MY NOTE "/api/note"
router.post("/notes", (req,res)=>{
    console.log("trying to save the note ", req.body);
    fs.readFile(fileName, 'utf8', function(err, data){
      
        if(err) throw err; 

        //Covert it back to JSON object 
        const content = JSON.parse(data); 
        // console.log("previous Notes", content); 
        
        //New Note
        const newNote = req.body; 

        console.log("new Note", newNote); 
        //add an Id property to newnote object 
        

        //Spread operator ... for Array it creates a duplicate of the original data 
        const combineContent = [...content, newNote]; 
        console.log(combineContent); 
        //update the JSON file 
        fs.writeFile(fileName, JSON.stringify(combineContent), function writeJSON(err) {
            if (err) return console.log(err);
           
            console.log('writing to ' + fileName);


            //send it back to html page 
            res.json(combineContent);

          });
    });
      
})
module.exports = router; 
