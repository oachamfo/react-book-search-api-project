export default function ShowBooks({ books }) {
  return (
    <div className="books">
      {books?.items.map((book) => (
        <div>
          <p className="title">{book.volumeInfo.title}</p>

          <p className="authors">{book.volumeInfo.authors}</p>

          {book?.volumeInfo?.imageLinks?.thumbnail ? (
            <img src={book.volumeInfo.imageLinks.thumbnail} />
          ) : (
            <p>Sorry, No Image Link</p>
          )}
        </div>
      ))}
    </div>
  );
}
