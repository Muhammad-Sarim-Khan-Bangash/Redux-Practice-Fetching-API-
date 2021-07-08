import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../store/action";
import { useEffect } from "react";

const Home = () => {
  const state = useSelector((state) => state);
  console.log(state);

  const dispatch = useDispatch();
  const updateData = () => {
    dispatch(getUsers());
    dispatch({
      type: "UPDATE_DATA",
      username: "Basit",
    });
  }; // jb update k button pe click ho ga users get hon gy aur name bh update ho ga

  console.log("Users ==>", state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []); // jb page load ho ga users get hon gy

  return (
    <>
      <div className="text-center">
        <h1>Home Page</h1>
        <h2 className="text-info">{state.username}</h2>
        <button className="btn btn-success my-3" onClick={updateData}>
          UPDATE
        </button>
        {state.users.map((v, i) => {
          return (
            <div
              key={i}
              className="mt-4"
              style={{ borderBottom: "1px solid #ddd" }}
            >
              <h5>
                <span className="text-danger">Name: </span>
                {v.name}
              </h5>
              <h5>
                <span className="text-danger">Username: </span>
                {v.username}
              </h5>
              <h5>
                <span className="text-danger">Email: </span>
                {v.email}
              </h5>
              <h5>
                <span className="text-danger">Website: </span>
                {v.website}
              </h5>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
