//component to display book info
//uses destructuring in the parameter: props.books is destructured
export default function BookDisplay({ books }) {
  //some example syntax to access the results:
  // console.log(books?.items);
  // {books?.items.map((book) => console.log(book.volumeInfo.title))}
  //{books?.items.map((book) => console.log(book.volumeInfo.authors))}

  return (
    <div className="book-display-component">
      <div className="book-display-heading">Book Display Results</div>
      <div className="books">
        {books?.items.map((book) => (
          <div>
            <p className="title">{book.volumeInfo.title}</p>
            <p className="authors">{book.volumeInfo.authors}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
