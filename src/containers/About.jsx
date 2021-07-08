import { useSelector } from "react-redux";

const About = (props) => {
  const state = useSelector((state) => state);
  console.log(state);

  return (
    <div className="text-center">
      <h1>About Page</h1>
      <h1 className="text-danger py-2">{state.name}</h1>
    </div>
  );
};

export default About;
