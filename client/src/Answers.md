[X ] What are the required parts of class components?
    Constructor() method → It gives us the chance to do any initialization and set the state of the class component. We also need to invoke the super() inside the constructor method to extend the parent component, in this case React.Component. Our component will get all the functionalities provided by the parent class.

    render() method → Is also required to render the components to the DOM

- [X ] Name at least three lifecycle methods?
    The 3 phases are Mounting, Updating, Unmounting.
    componentDidMount(), componentDidUpdate(), componentWillUnmount(), render(), constructor(), 

- [X ] Why are forms used so often in web applications and software?
    Forms allow users to enter data that is sent to a server for processing. Most of the interesting web apps we use have forms (like Google search, AirBnB search, etc.)

- [ X] What advantages are there by using a forms library like Formik?
    1. It makes it easier to write components. The heavy and complex state management is taken off the shoulders of developers. Formik takes care of it.
    2. It boosts productivity - writing a form with Formik is faster and easier than setting it up in React.

- [X ] Why do we write tests for our apps?
    Because tests surface bugs faster and reduce the risk of regression. It also allows us to better trust the code - we know what to expect. Tests force developers to think about the edge cases. Tests also act as a safety net when multiple people make changes to the codebase or refactoring it. Tests encourage developers to write more testable, hence better code.
