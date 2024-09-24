import { useEffect } from "react";
import Slider from "../../Components/Slider/Slider";

const Home = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    return (
        <div>
            <Slider></Slider>
            <div className="w-[92%] mx-auto">
                
            </div>
        </div>
    );
};

export default Home;