import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const nav = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/details">Details</NavLink>
      </li>
      <li>
        <NavLink to="/connect">Connect</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="flex py-2 px-3 justify-between  items-center  border bg-[rgb(8,26,22)]">
        <div className="flex items-center ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-0 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu  dropdown-content bg-base-100 h-screen text-xl z-[1] mt-3 w-52 py-6 shadow"
            >
              {nav}
            </ul>
          </div>
          <NavLink to='/' className="lg:text-2xl title-text text-[rgb(234,237,240)] lg:text-right">
               <div className=" flex flex-col ml-32  md:ml-0 lg:ml-0">
              <span className="text-2xl  lg:text-4xl">LUXURY</span>
              <span className="text">PROPERTIES</span>
            </div>
          </NavLink>
         
        </div>
        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal text-xl px-1">{nav}</ul>
        </div>
        <div className="w-[70px] h-[70px] rounded-full bg-slate-400 font-bold lg:text-lg btn border-none">
            <NavLink to='/logIn' ><button>LogIn</button></NavLink>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
