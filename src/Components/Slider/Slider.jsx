// import PropTypes from "prop-types";
import 'animate.css';
import './sliderContent.css'
import { useLoaderData } from "react-router-dom";
import sliderImg1 from "../../assets/house-1/Screenshot (335).png"; 
import sliderImg2 from "../../assets/house-2/Screenshot (340).png"; 
import sliderImg3 from "../../assets/house-4/Screenshot (366).png"; 
import sliderImg4 from "../../assets/house-5/Screenshot (388).png"; 
import sliderImg5 from "../../assets/house-6/Screenshot (405).png"; 
import sliderImg6 from "../../assets/house-9/Screenshot 2024-09-22 231257.png"; 
import { useEffect } from 'react';


const Slider = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    const data = useLoaderData()
    const {fd} = data 

    // const [animateLeft, setAnimateLeft] = useState('')
    // const handleLeft =()=>{
    //     setAnimateLeft('animate__fadeOutLeft');
    //     setTimeout(()=>{
    //         setAnimateLeft('')
    //     },1);
    // }
    return (
        <div>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={sliderImg1}
      className="w-full " />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide6" className=" hex-button">❮</a>
      <a href="#slide2" className=" hex-button">❯</a>
    </div>
    {/* <div className='absolute lg:w-[55%] mx-auto space-y-4 top-[35%] left-[20%] lg:top-[30%] lg:left-[10%] '>
        <h1 className='md:text-2xl  lg:text-6xl font-bold text-white shadow-lg '>Oceanfront Villa <br /> in Malibu</h1>
       
    </div> */}
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={sliderImg2}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1"  className="hex-button">❮</a>
      <a href="#slide3" className="hex-button">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={sliderImg3}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="hex-button">❮</a>
      <a href="#slide4" className="hex-button">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src={sliderImg4}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="hex-button">❮</a>
      <a href="#slide5" className="hex-button">❯</a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
    <img
      src={sliderImg5}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="hex-button">❮</a>
      <a href="#slide6" className="hex-button">❯</a>
    </div>
  </div>
  <div id="slide6" className="carousel-item relative w-full">
    <img
      src={sliderImg6}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide5" className="hex-button">❮</a>
      <a href="#slide1" className="hex-button">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Slider;
// Slider.propTypes ={
//     data:PropTypes.node
// }