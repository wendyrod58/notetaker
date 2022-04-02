//require express 
const express = require('express'); 
const path = require('path');
//initialize the server 
const app = express(); 

//setup PORT number 
const PORT = process.env.PORT || 3001; 

//setup jSON and parsing for the server 
app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 

//public folder accessible 
app.use(express.static('public')); 

//setup the diff routes 
//API ROUTESS 

app.use("/api", require("./routes/apiRoutes")); 

//1. Render my Notes.html file in the browser 
app.use("/notes", (req,res) =>{
    res.sendFile(path.join(__dirname, "./public/notes.html"))
})


// listen to the server 
app.listen(PORT , () => console.log(`Listening Server at ${PORT}`)); 