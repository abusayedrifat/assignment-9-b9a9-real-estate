import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { NavLink } from "react-router-dom";
import { FaGoogle, FaGithub} from "react-icons/fa";
import './login.css'
const LogIn = () => {
    const {googleLogIn, gitHubLogIn, logIn} = useContext(AuthContext)
    // const navigate = useNavigate()
  
    // console.log(location);
    
    const handlelogIn = e =>{

        e.preventDefault();
        const form = new FormData(e.currentTarget)
        
        const email = form.get('email')
        const password = form.get('password')
        e.target.email.value =''
        e.target.password.value =''
        

        logIn(email, password)
        .then(result =>{
            // navigate(location?.state ? location.state : '/');
            console.log(result);
            
        })
        .catch(error =>{
            console.log(error.message);
            
        })
    }

    const handleGoogleLogIn = e =>{
        e.preventDefault();

        googleLogIn()
        .then(result=>{
            console.log(result);
            
        })
        .catch(error=>{
            console.log(error);
            
        })
    }
    const handleGitHubLogIn = e =>{
        e.preventDefault();

        gitHubLogIn()
        .then(result=>{
            console.log(result);
            
        })
        .catch(error=>{
            console.log(error);
            
        })
    }
  
  return (
    <div className="bg-[#F3F3F3] pb-[50px] pt-16 p-text ">
      <div className="bg-white w-[90%] lg:w-[50%]  mx-auto px-10  lg: py-20  rounded-md">
        <h1 className="text-color text-3xl font-semibold text-center mb-16   ">
          Login your account
        </h1>
        <form onSubmit={handlelogIn} action="" className="space-y-8">
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
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input bg-[#F3F3F3] input-bordered"
              required
            />
          </div>
        <button className=" w-full btn bg-[#0b5c52] text-[#C28563] view-button">
            Log In
          </button>
        
          
        </form>
        <div className="text-center mt-8 text-[#706F6F] font-semibold">
            <p>
              Don&apos;t Have An Account?{" "}
              <NavLink to="/register" className="text-[#F75B5F]">
                Register
              </NavLink>
            </p>
          </div>
      </div>
      
      <div className="flex items-center w-[70%] lg:w-[50%] mx-auto gap-2">
        <div className="my-14 border w-full border-gray-600"></div>
        <span className="pb-1 font-bold text-xl">Or</span>
        
        <div className="my-14 border w-full border-gray-600"></div>
      </div>
        {/* <button onClick={handleGitHubLogIn} className="w-[70%] lg:w-[50%] btn flex justify-between"> <img src="" alt="" /> <span>Google log</span>  </button>
        <button onClick={handleGoogleLogIn} className="w-[70%] lg:w-[50%] btn bg-none rounded-full"></button> */}

        <div className="flex flex-col justify-center mx-auto gap-4 w-[70%] lg:w-[50%]">
            <button
          onClick={handleGoogleLogIn}
          className="btn bg-[#0b5c52] text-[#C28563] view-button"
        >
          <FaGoogle className="text-xl"></FaGoogle>
          LogIn with Google
        </button>
        <button
          onClick={handleGitHubLogIn}
          className="btn bg-[#0b5c52] text-[#C28563] view-button"
        >
          <FaGithub className="text-xl"></FaGithub>
          LogIn with GitHub
        </button>
        </div>
        
    </div>
  );
};

export default LogIn;