import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './register.css'
const Regster = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [submitError, setSubmitError] = useState("");
//   const [showPassword,  setShowPassword] = useState(false)

  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    // const photoUrl = form.get("photoURL");
    console.log(name);

    e.target.name.value = "";
    e.target.email.value = "";
    e.target.password.value = "";
    // e.target.photoUrl.value = "";

    createUser(email, password)
      .then((result) => {
        toast.success("registratered successfully")
        navigate("/logIn");
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
    };

    const handlePassword = (e) => {
      const password = e.target.value;

      if (password.length < 6) {
        toast.warn("password must be at least 6 character")
    
        return;
      } else if (!/[A-Z]/.test(password)) {
        toast.warn("paaword must contaiat least one capital letter")
       
        return;
      } else if (!/[a-z]/.test(password)) {
        toast.warn("paaword must contaiat least one small letter")
        
        return;
      } else {
        toast.success("password is good to go now")
        setSubmitError()
        return;
      }
    };
  
  return (
    <div className="bg-[#F3F3F3] pb-[50px] border ">
      <div className="bg-white h-full w-[90%] lg:w-[60%] border mx-auto my-28 px-10 lg:px-24 py-20  rounded-md">
        <h1 className="text-color text-3xl font-semibold text-center mb-12 ">
          Register your account
        </h1>
        <form onSubmit={handleRegister} action="" className="space-y-8">
          <div className="form-control space-y-3">
            <label className="label">
              <span className="label-text">Your name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input bg-[#F3F3F3] input-bordered"
            />
          </div>
          <div className="form-control space-y-3">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="url"
              name="photoURL"
              placeholder="Enter your photo url"
              className="input bg-[#F3F3F3] input-bordered"
            />
          </div>
          <div className="form-control space-y-3">
            <label className="label">
              <span className="label-text">Email address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input bg-[#F3F3F3] input-bordered"
              required
            />
          </div>
          <div className="form-control space-y-3">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="flex relative">
              <input
                onKeyUp={handlePassword}
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input bg-[#F3F3F3] input-bordered w-full"
                required
              />
              <span></span>
            </div>
          </div>
          <div>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Accept terms and condition</label>
          </div>
          <button className="btn bg-[#0b5c52] text-[#C28563] view-button">
            Register
          </button>
        </form>
        <div className="text-center mt-8 text-[#706F6F] font-semibold">
          <p>
            Already Have An Account?
            <NavLink to="/logIn" className="text-[#F75B5F]">
              LogIn
            </NavLink>
          </p>
        </div>
        
      </div>
      
       {submitError && ( <div><ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition: Bounce
/>  </div>   )
       }
       <div>
       <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition: Bounce
/> 
       </div>
    
    </div>
  );
};

export default Regster;
