# Answers

- [X] Why are forms used so often in web applications and software?

Forms are used to organize and submit data from the user's browser to a backend server in a convenient way.

- [X] What advantages are there by using a forms library like Formik?

Form libraries like Formik provide convenient methods and functionality that default web browser forms don't provide (ex: input validation and reactive error reporting).

- [X] What is stateful logic?

Stateful logic is logic that the current context relies on and reacts to (for example, useState hook creates local state variable which can be used to display information dynamically to the user).

- [X] What is a custom hook, and what does it mean to compose hooks together?

A custom hook is a function that combines functionality from the app as well as React's other hooks to provide extra functionality for code re-use across the application. 

- [X] Describe the process of retriving a token from a server and using that token in subsequent API calls.

A browser will provide authentication details from the user (like username and password) and uses a request library like axios to send credentials in a post request to a backend. If the backend decides that the credentials are valid, it will return a token and the user will be able to make subsequent calls to protected endpoints on the server to request information. 
