//component to display book info
//uses destructuring in the parameter: props.books is destructured
export default function BookDisplay({ books }) {
  //the syntax to access the results:
  // console.log(books?.items);

  return (
    <div>
      Book Display Component
      <div className="books">
        {books?.items.map((book) => console.log(book.volumeInfo.title))}
        {books?.items.map((book) => console.log(book.volumeInfo.authors))}
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
