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
    // fetch() function requests API data and stores it in response variable
    //example endpoints: URL formats to use to make a call to an API:
    //`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchQuery}`
    //`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${bookTitleQuery}+inauthor:${authorLastNameQuery}&key=${yourAPIKey}&startIndex=0&maxResults=3`
      );

      // json() function parses JSON response data into a JavaScript object
      const books_data = await response.json();

      //set the books state by passing books_data to setBooks function from books state array
      //if a user does not enter a book title and author name, the Google Books API by default returns its own random results
      //the if statement is to make it so the results returned by Google Books API if user leaves book title and
      //author's name blank are made null
      if (bookTitleQuery === "" && authorLastNameQuery === "") {
        setBooks("no-user-input");
      } else {
        setBooks(books_data);
      }
      //console.log(books);
    } catch (e) {
      console.error(e);
    }
  };

  //In this case, useEffect() runs when App() component first renders but not for subsequent renders because
  //of the empty array used as a second parameter
  useEffect(() => {
    getBooks("react for beginners", "google");
  }, []);

  function firstVisit() {
    return (
      <div className="App">
        <InputForm findBooks={getBooks} />
        <p>Please wait...</p>
        <p>Initializing website...</p>
        <p>Loading books...</p>
      </div>
    );
  }
  function notFirstVisit() {
    //pass getBooks function as a prop called findBooks to InputForm
    //pass {books} state as a prop called books to DisplayResults
    return (
      <div className="App">
        <InputForm findBooks={getBooks} />
        <DisplayResults books={books} />
      </div>
    );
  }

  //conditional rendering based on if books state is set or not set
  //if books state is set then notFirstVisit() if books state is not set then firstVisit()
  //alternatively, a homepage component could have been displayed for firstVisit()
  return books ? notFirstVisit() : firstVisit();
}
