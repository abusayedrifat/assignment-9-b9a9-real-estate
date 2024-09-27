import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-3">
      <p className="text-center title-text  pt-10 text-3xl">User profile</p>
      <p className="text-2xl">{user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
};

export default Profile;
