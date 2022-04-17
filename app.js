const express = require("express");
const mongoose = require('mongoose');
const router  =  require("./routes/books-routes")

const app = express();


//connect to db
mongoose.connect("mongodb+srv://admin:c16efrKqAxkxZeoO@cluster0.y8vak.mongodb.net/myDB?retryWrites=true&w=majority").then(()=>{
    console.log("Connected to Database")
}).then(() => 
{ app.listen(5000)
})
.catch((err)=>{console.log(err);
})

//middilewares
app.use(express.json())
app.use("/books",router);


//listner
// app.listen(3000,()=>{
//     console.log('server is listning on port 3000');
// });





















// c16efrKqAxkxZeoO