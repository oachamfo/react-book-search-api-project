import { useState, useEffect } from "react";

export default function InputForm({ findBooks }, { changeFirstVisit }) {
  //declare state that the component will use to track the input form's data
  //since in React components usually handle forms
  const [formInput, setFormInput] = useState({
    bookTitleQuery: "",
    authorLastNameQuery: "",
  });

  //function to update search queries in formInput state as user types
  const handleChange = (event) => {
    /*The bracket notation followed by the colon means we are selecting a key on the formInput state object.
    From looking at the code for our form that the user will use to make an input for the search query, 
    event.target.name is a key on the event object, and has a value equal to the properties in the formInput
    state, and thus, is used to select the corresponding properties; the spread operator 
    copies formInput; and event.target.value is assigned to the corresponding key on formInput via event.target.name;
    Without the spread operator to copy formData, setFormData will just set formInput as an object with
    a key value pair whereby event.target.name is the key and event.target.value is the value, meaning that
    all other data if present in the formInput state will be lost.*/
    setFormInput({ ...formInput, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    //preventDefault() in this case prevents the default HTML behvaior of the form submitting and the page refreshing upon submit
    //so that the React component can handle the form instead of HTML.
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
          Author's Name:
          <input
            type="text"
            name="authorLastNameQuery"
            onChange={handleChange}
            value={formInput.authorLastNameQuery}
          />
        </label>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
