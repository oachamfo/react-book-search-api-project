import { useState, useEffect } from "react";

export default function InputForm({ findBooks }) {
  //declare state that the component will use to track the input form's data
  //since in React components usually handle forms
  const [formInput, setFormInput] = useState({
    bookTitleQuery: "",
    authorLastNameQuery: "",
  });

  //function to update search queries in formInput state as user types
  const handleChange = (event) => {
    /*The bracket notation followed by the colon means we are selecting a key on the formInput state object.
    From looking at the code for our form, event.target.name is a key on the event object, 
    and has a value equal to searchQuery, and thus, is used to select searchQuery on the formInput state object; 
    the spread operator copies formInput; and event.target.value is assigned to searchQuery on formInput via event.target.name;
    Without the spread operator to copy formData, setFormData will just set formInput as an object with
    a key value pair whereby event.target.name is the key and event.target.value is the value, meaning that
    all other data if present in the formInput state will be lost.*/
    setFormInput({ ...formInput, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    //preventDefault in this case prevents the default HTML behvaior of the form submitting and the page refreshing upon submit
    //so that the React component can handle the form instead.
    event.preventDefault();
    //findBooks prop is a function
    //pass searchQuery to findBook prop, which is the getBooks function in the App component
    findBooks(formInput.bookTitleQuery, formInput.authorLastNameQuery);
  };

  //the form to be returned to the user
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Book's Title:
          <input
            type="text"
            name="bookTitleQuery"
            onChange={handleChange}
            value={formInput.bookTitleQuery}
          />
        </label>

        <label>
          Author's Last Name:
          <input
            type="text"
            name="authorLastNameQuery"
            onChange={handleChange}
            value={formInput.authorLastNameQuery}
          />
          <input type="submit" value="submit" />
        </label>
      </form>
    </div>
  );
}
