//imports
import NoBookDisplay from "./NoBookDisplay";
import ShowBooks from "./ShowBooks";

//component to display book info
//uses destructuring in the parameter: props.books is destructured to {books}
export default function DisplayResults({ books }) {
  //some example syntax to access the results of the API response using optional chaining:
  // console.log(books?.items);
  // {books?.items.map((book) => console.log(book.volumeInfo.title))}
  //{books?.items.map((book) => console.log(book.volumeInfo.authors))}

  //conditional rendering

  // variable declaration to be used for conditional rendering
  let results;

  //this is the version of conditional rendering using more verbose code
  /*
    if (
    books?.totalItems === 0 ||
    books === null ||
    books === undefined ||
    books?.items === undefined ||
    books?.items === null
  ) {
    results = <NoBookDisplay />;
  } else {
    results = <ShowBooks books={books} />;
  }
*/
  //version of conditional rendering using the ternary operator and also optional chaining
  books?.totalItems > 0
    ? (results = <ShowBooks books={books} />)
    : (results = <NoBookDisplay />);

  //what the component returns
  return (
    <div className="book-display-component">
      <div className="book-display-heading">Book Display Results</div>
      {results}
    </div>
  );
}
