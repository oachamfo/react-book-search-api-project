export default function ShowBooks({ books }) {
  //shows use of both optional chaining to access properties and conditional rendering using the ternary operator inside the map() function
  return (
    <div className="books">
      {books?.items.map((book) => (
        <div>
          {book?.volumeInfo?.title ? (
            <p className="title">{book.volumeInfo.title}</p>
          ) : (
            <p>Sorry, no book title.</p>
          )}
          {book?.volumeInfo.authors ? (
            <p className="authors">{book.volumeInfo.authors}</p>
          ) : (
            <p>Sorry, no book authors.</p>
          )}

          {book?.volumeInfo?.imageLinks?.thumbnail ? (
            <img src={book.volumeInfo.imageLinks.thumbnail} />
          ) : (
            <p>Sorry, no image link.</p>
          )}
        </div>
      ))}
    </div>
  );
}
