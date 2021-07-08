const INITIAL_STATE = {
  username: "Haider",
  email: "haider@gmail.com",
  users: [],
};

/* 
const reducer = (state = INITIAL_STATE) => {
    console.log(action);
    return (state);
}; 
*/

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_DATA":
      return {
        ...state,
        username: action.username,
      };
    case "GET_USERS":
      return {
        ...state,
        users: action.users,
      };
    default:
      return state;
  }
};
// action is for dispatching for updating data
export default reducer;
