const express = require("express");
const app = express();
const cors =  require("cors"); 
const port = 3000;
app.use(express.json());
// richiamo le route
const postsRouters = require("./routers/posts");
// inserisco handles error 
const handleError = require("./middleware/handleError");
// creo assets aperto per le immagini
app.use(express.static("public"));

app.use(
    cors({
    origin: "http://localhost:5173"
}));

app.use("/posts", postsRouters);

// creo route di base
app.get("/", (req, res)=>{
    res.send("sono route di base");
    
});

// Dopo tutte le rotte inseriamo il moddleware che gestisce errore
// app.use(handleError);

// creo route di listening
app.listen(port, ()=>{
    console.log("server pronto");
    
});