//destructuring useState and useEffect from react
import { useState, useEffect } from "react";

//import CSS file
import "./App.css";

//import components
import InputForm from "./components/InputForm";
import DisplayResults from "./components/DisplayResults";

export default function App() {
  //variable to hold api key loaded from .env file
  //it appears variable must start with REACT_APP_ in .env file
  //and also it appears .env file needs to be in the root folder of project
  const yourAPIKey = process.env.REACT_APP_APIKEY;

  //state to track book data
  const [books, setBooks] = useState(null);

  //function to get books
  const getBooks = async (bookTitleQuery, authorLastNameQuery) => {
    // fetch() function requests api data and stores it in response variable
    //example apis:
    //`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchQuery}`
    //`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`
    //authorLastNameQuery = "";
    //bookTitleQuery = "The Great Gatsby";
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${bookTitleQuery}+inauthor:${authorLastNameQuery}&key=${yourAPIKey}&startIndex=0&maxResults=3`
      );

      // json() function parses JSON response data into a JavaScript object
      const books_data = await response.json();

      //set the books state using setBooks function from books state
      setBooks(books_data);
      console.log(books);
    } catch (e) {
      console.error(e);
    }
  };

  //In this case, useEffect() runs when component first renders but not for subsequent renders because
  //of the empty array used as a second parameter
  useEffect(() => {
    getBooks("college", "achamfour");
  }, []);

  //pass getBooks function as a prop called findBooks to InputForm
  //pass books state as a prop called books to BookDisplay
  return (
    <div className="App">
      <InputForm findBooks={getBooks} />
      <DisplayResults books={books} />
    </div>
  );
}
