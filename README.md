# About Project

## Google Books API Book Search

    An Application Programming Interface (API) is an interface for two or more computer programs
    to communicate with each other. An API provides a protocol through the use of endpoints for
    which a caller can request data and a response can then be returned. The structure of an API
    response object has to be known in order to write code that will interact with the response
    object. This project demonstrates the use of an API to retrieve, store, and display
    data to a user. The data structure used is a state via the useState() function
    from React's library. A state is under the hood implemented as a JavaScript object.
    A search query containing a book title and an author's name will be sent to Google Books API.
    The response object from the API is in JSON format, which will then be converted
    to a JavaScript object via JavaScript's JSON() function. The converted response object
    is then stored in a state for retrieval and usage. The user will then be displayed
    some pertinent data extracted from the stored object in the state.

## Motivation

    This project was built as a requirement for a PerScholas software engineering cohort.
    The primary project specifications were the following:
        1. Use HTML, CSS, JavaScript and React
        2. Use fetch() and useEffect()
        3. make an API request to an external API
        and insert some of the response data into a state and display that data

## Built With

    The technologies used are HTML, CSS, JavaScript, and the React library.
    CSS Flexbox was used for the layout. A user is presented with a React web form.
    The user searches the Google Books API by inputing either or both of a book tile
    and an author's last name. Some of the data, including book title, author's name,
    year of publication and a link to the book from the response object is
    then extracted and presented to the user.

## How To Use Code Base

The code base can be used as an educational material on how to use
an API with React and the JavaScript fetch() function. The code base is
very well commented, and demonstrates the use of state, passing
down props both in the form of state and functions. The code also
shows how to pass some data from a child component's state to a
parent component's function as parameters if the function has been
passed down to the child component by the parent component.

## Installation

No special installation instructions. No backend DB to set up. Just deploy as one would a website.

# License

MIT (c) Owusuduah Achamfour

# Link to Website

https://oachamfo.github.io/react-book-search-api-project/
