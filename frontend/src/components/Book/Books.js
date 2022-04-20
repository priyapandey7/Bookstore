import React, { useEffect, useState } from "react";
import "./Book.css";
import axios from "axios";
import Book from "./Book";


const URL = "http://localhost:5000/books";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Books = () => {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => {
       console.log(data.books ,"Pp");
      setBooks( data.books) }).catch((err) => {
        console.log(err,"errr");
      })
  }, []);
  console.log(books);
  return (
    <div>
    
      <ul>
        {  console.log(books,"hi")}
        {books &&
          books.map((book, i) => (
            <li key={i}>
              <Book book={book} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Books;