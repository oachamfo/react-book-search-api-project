export default function ShowBooks({ books }) {
  return (
    <div className="books">
      {books?.items.map((book) => (
        <div>
          <p className="title">{book.volumeInfo.title}</p>
          <p className="authors">{book.volumeInfo.authors}</p>
        </div>
      ))}
    </div>
  );
}
