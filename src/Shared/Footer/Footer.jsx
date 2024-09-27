import "./footer.css";
import logo from "../../assets/logo/ls.png";
import { MdOutlineFacebook } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="bg-neutral">
      <footer className="footer  text-neutral-content p-10">
        <aside>
          <div className="w-[70px]">
            <img src={logo} alt="" />
          </div>

          <p>
            <div className=" flex flex-col title-text">
              <span className="text-2xl text-[#C28563]  lg:text-4xl">
                LUXURY
              </span>
              <span className="text-xl text-[#1eac9b70]">PROPERTIES</span>
            </div>
            <br />
            Providing reliable homes since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4 text-4xl">
            <a href="#">
              <MdOutlineFacebook></MdOutlineFacebook>
            </a>
            <a href="#">
              <FaXTwitter></FaXTwitter>
            </a>
            <a href="#">
              <BsInstagram></BsInstagram>
            </a>
            <a href="#">
              {" "}
              <BsLinkedin></BsLinkedin>{" "}
            </a>
          </div>
        </nav>
      </footer>
      <small className="flex justify-center text-white">
        All rights reserved , 2024 &copy;
      </small>
    </div>
  );
};

export default Footer;
