const getUsers = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => dispatch({ type: "GET_USERS", users: json }));
  };
};

// For Multiple Apis
const getTodos = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => dispatch({ type: "GET_USERS", users: json }));
  };
};
export { getUsers, getTodos };
