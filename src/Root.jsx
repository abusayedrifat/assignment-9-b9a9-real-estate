import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";
import Footer from "./Shared/Footer/Footer";

const Root = () => {
    return (
        <div>
            <div className="">
            <Navbar></Navbar>    
            </div>
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;