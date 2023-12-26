import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Api = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://reactnd-books-api.udacity.com/books", {
          headers: { 'Authorization': 'whatever-you-want' }
        });
        setBooks(response.data.books); // Assuming the array of books is under the 'books' property in the response
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);
console.log(books)
  return (
    <div>
      {books.map(book => (
        <div key={book.id} className='container'>
             <h3 >{book.title}</h3>
             <div className='flex'>
             {book.imageLinks && book.imageLinks.smallThumbnail && (
            <img src={book.imageLinks.smallThumbnail} alt={book.title} />
          )}
             <p>{book.description}</p>
             </div>
            
        <h4>{book.authors}</h4>
        <div className="book-divider" />
        </div>
       
        
      ))}
    </div>
  );
}

export default Api;


