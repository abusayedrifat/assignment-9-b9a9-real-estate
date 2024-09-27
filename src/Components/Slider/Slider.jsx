// import PropTypes from "prop-types";
import 'animate.css';
import './sliderContent.css'
import sliderImg1 from "../../assets/house-1/Screenshot335.png"; 
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
    <div className='absolute max-w-[500px] space-y-4 top-[35%] left-[20%]  lg:top-[20%] lg:left-[10%] '>
        <div className='md:text-2xl hidden lg:block lg:text-6xl font-bold text-white shadow-lg title-text'>Oceanfront Villa <br /> in Malibu</div>
        <p className='text-gray-300 glassy shadow-lg  hidden  lg:block  '>Oceanfront villa offers breathtaking panoramic views of the Pacific. Complete with private beach access, infinity pool, and luxury interiors, this modern retreat combines elegance with coastal living</p>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={sliderImg2}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1"  className="hex-button">❮</a>
      <a href="#slide3" className="hex-button">❯</a>
    </div>
    <div className='absolute space-y-4 top-[35%] left-[20%]  lg:top-[20%] lg:left-[10%] '>
        <div className='md:text-2xl hidden lg:block lg:text-6xl font-bold text-white shadow-lg title-text'>Tuscan Countryside <br /> Estate</div>
        <p className='text-gray-300 max-w-[500px] glassy shadow-lg  hidden  lg:block  '>Boasting sprawling vineyards, a wine cellar, and a gourmet kitchen, this 10,000 sqft villa offers authentic Italian countryside living.</p>
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
    <div className='absolute max-w-[500px] space-y-4 top-[35%] left-[20%]  lg:top-[20%] lg:left-[10%] '>
        <div className='md:text-2xl hidden lg:block lg:text-6xl font-bold text-white shadow-lg title-text '>French Riviera Cliffside Mansion</div>
        <p className='text-gray-300 glassy shadow-lg  hidden  lg:block  '>Offers mesmerizing views of the Mediterranean. With a private helipad, expansive terraces, and stunning infinity pools, it defines luxury on the Côte d&quote;Azur.

</p>
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
    <div className='absolute max-w-[500px] space-y-4 top-[35%] left-[20%]  lg:top-[20%] lg:left-[10%] '>
        <div className='md:text-2xl hidden lg:block lg:text-6xl font-bold text-white shadow-lg title-text '>Aspen Mountain Chalet</div>
        <p className='text-gray-300 glassy shadow-lg  hidden  lg:block  '> Ski-out chalet blends rustic charm with high-end amenities. With direct access to the slopes, a heated outdoor pool, and a luxury spa, it is the perfect alpine retreat.

</p>
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
    <div className='absolute max-w-[500px] space-y-4 top-[35%] left-[20%]  lg:top-[20%] lg:left-[10%] '>
        <div className='md:text-2xl hidden lg:block lg:text-6xl font-bold text-white shadow-lg title-text '>Beverly Hills Modern Mansion</div>
        <p className='text-gray-300 glassy shadow-lg  hidden  lg:block  '>  The heart of Beverly Hills boasts floor-to-ceiling glass walls, a stunning infinity pool, and state-of-the-art amenities. Ideal for luxury living in one of the worlds most prestigious neighborhoods.

</p>
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
    <div className='absolute max-w-[500px] space-y-4 top-[35%] left-[20%]  lg:top-[20%] lg:left-[10%] '>
        <div className='md:text-2xl hidden lg:block lg:text-6xl font-bold text-white shadow-lg title-text '>Swiss Alps Ski Lodge</div>
        <p className='text-gray-300 glassy shadow-lg  hidden  lg:block  '> Offers private ski-in, ski-out access, luxurious mountain-view terraces, and a world-class spa. Perfect for those seeking alpine luxury in a secluded, scenic environment.

</p>
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