import './footer.css'
import logo from "../../assets/logo/ls.png"
import { MdOutlineFacebook } from 'react-icons/md';
import { FaXTwitter } from 'react-icons/fa6';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
const Footer = () => {
    return (
        <div>
            <footer className="footer bg-neutral text-neutral-content p-10">
  <aside>
    <div className='w-[70px]'>
        <img src={logo} alt="" />
    </div>
    
    <p>
      LUXURY PROPERTIES
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
      <a href="#"> <BsLinkedin></BsLinkedin> </a>
    </div>
  </nav>
</footer>
        </div>
    );
};

export default Footer;