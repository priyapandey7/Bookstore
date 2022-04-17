const Book = require("../model/Book");
const { param } = require("../routes/books-routes");

//list books controllers
const getAllbooks= async(req,res,next) =>{
    let books;
try{
  books = await  Book.find()
}
 catch (err){
console.log(err);
}
if(!books) {
    return res.status(404).json({message:"No Book found"})
}
return res.status(200).json({books});

}

//getById single details
const getById =  async(req, res, next) => {
 const id = req.params.id //req.param return theid which is available in the url
    let book;
    try{
        book = await Book.findById(id)
    } catch(err){
        console.log(err);
        }
        if(!book) {
            return res.status(404).json({message:"No book found"})
        }
        return res.status(200).json({book}); 
}

//add Books controllers
const addBook = async(req,res,next) => {
    const { name, auther, description, price, available, image } = req.body;
    let book;
    try{
        book = new Book({
            name,
            auther,
            description,
            price,
            available,
            image
        })
        await book.save()
        }catch(err){
        console.log(err);
        }
        if(!book) {
            return res.status(500).json({message:"Unable to  add book"})
        }
        return res.status(201).json({book}); //201 means created 
}
//update book
const updateBook = async(req,res,next) => {
    const id = req.params.id
    const { name, auther, description, price, available ,image } = req.body;
    let book;
    try{
        book = await Book.findByIdAndUpdate(id,{
            name,
            auther,
            description,
            price,
            available
        })
        await book.save()
        }catch(err){
        console.log(err);
        }
        if(!book) {
            return res.status(404).json({message:"Unable to update with this  id book"})
        }
        return res.status(200).json({book}); //201 means created 
}
//delete
const deleteBook =  async(req,res,next) =>{
    const id = req.params.id;
    let book;
    try{
        book = await Book.findByIdAndRemove(id)
        } catch(err){
         console.log(err);
        }
        if(!book) {
            return res.status(404).json({message:"Unable to delete by  ID"})
        }
        return res.status(200).json({message:"product successfully deleted"});

}

exports.getAllbooks = getAllbooks;
exports.addBook = addBook;
exports.getById =getById;
exports.updateBook =updateBook;
exports.deleteBook =deleteBook;