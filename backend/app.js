const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books

//connect to db
mongoose.connect("mongodb+srv://admin:c16efrKqAxkxZeoO@cluster0.y8vak.mongodb.net/myDB?retryWrites=true&w=majority").then(()=>{
    console.log("Connected to Database")
}).then(() => 
{ app.listen(5000)
}).catch((err) => console.log(err));
