//destructuring useState and useEffect from react
import { useState, useEffect } from "react";

//import CSS file
import "./App.css";

//import components
import InputForm from "./components/InputForm";
import BookDisplay from "./components/BookDisplay";

export default function App() {
  //variable to hold api key
  const apiKey = "";

  //state to track book data
  const [books, setBooks] = useState(null);

  //function to get books
  const getBooks = async (searchQuery) => {
    // fetch() function requests api data and stores it in response variable
    //`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    searchQuery = "Owusu Achamfour";
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`
      );
      // json() function parses JSON response data into a JavaScript object
      const data = await response.json();
      //set the books state using setBooks function from books state
      setBooks(data);
      console.log(books);
    } catch (e) {
      console.error(e);
    }
  };

  //useEffect runs when component first renders but not for subsequent renders
  useEffect(() => {
    getBooks("Owusu Achamfour");
  }, []);

  //pass getBooks function as a prop called findBook to InputForm
  //pass books state as a prop called books to BookDisplay
  return (
    <div className="App">
      <InputForm findBook={getBooks} />
      <BookDisplay books={books} />
    </div>
  );
}
