import { useParams } from "react-router-dom";

const Profile = () => {
  const { username } = useParams();
  return (
    <div>
      <h1>Profile</h1>
      <h2>{username}</h2>
    </div>
  );
};

export default Profile;
