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
    <div className="pt-3">
      <div className="flex justify-between  items-center bg-base-100">
        <div className=" ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-0"
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
              className="menu menu-sm dropdown-content bg-base-100 h-screen text-xl z-[1] mt-3 w-52 p-2 shadow"
            >
              {nav}
            </ul>
          </div>
          <a className="btn btn-ghost lg:text-2xl title-text lg:text-right">
            <div className="ml-28 md:ml-0 lg:ml-0">
              <span className="text-2xl  lg:text-4xl">LUXURY</span> <br />
              <span className="text">PROPERTIES</span>
            </div>
          </a>
        </div>
        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal text-xl px-1">{nav}</ul>
        </div>
        <div className="w-[70px] h-[70px] rounded-full bg-slate-400 font-bold lg:text-lg btn">
          <button>LogIn</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
