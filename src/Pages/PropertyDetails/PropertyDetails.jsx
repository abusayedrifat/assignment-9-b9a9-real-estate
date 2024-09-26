import { useLoaderData, useParams } from "react-router-dom";
import "./propertyDetails.css";
import { useEffect } from "react";

const PropertyDetails = () => {
  const allData = useLoaderData();
  const { property_id } = useParams();
  const property_idInt = parseInt(property_id);
  const exactPropertyData = allData.find(
    (property) => property.property_id == property_idInt
  );
  const {
    images,
    amenities,
    exterior,
    interior,
    features,
    bathrooms,
    bedrooms,
    land_size,
    size,
    price,
    type,
    location,
    name,
    status,
    coverImg,
  } = exactPropertyData;
 console.log(exactPropertyData);

 useEffect(()=>{
    window.scrollTo(0,0);
 },[])
 
  return (
    <div>
      <div className="relative">
        <img src={coverImg} alt="" />
        <div className=" shading h-full w-full absolute top-0"></div>
          <h1 className=" absolute heading  text-center top-[20%] left-[50%] -translate-x-[50%] title-text lg:font-extrabold text-4xl lg:text-7xl py-2">
            {name}
          </h1>  
      </div>
      <div className="pt-20 pb-10 px-3 ">
      <h1 className="  heading  text-center  title-text font-extrabold text-4xl lg:text-7xl py-8">
            Explore
          </h1>
          <div className="flex flex-wrap justify-center gap-3 lg:gap-2  shadow-lg w-full">
            <img src={images.img1} alt="" className="lg:w-[49.5%]"/>
            <img src={images.img2} alt="" className="lg:w-[49.5%]"/>
            <img src={images.img3} alt="" className="lg:w-[100%]"/>
            <img src={images.img4} alt="" className="lg:w-[49.5%]"/>
            <img src={images.img5} alt="" className="lg:w-[49.5%]"/>
            <img src={images.img6} alt="" className="lg:w-[100%]"/>
            <img src={images.img7} alt="" className="lg:w-[49.5%]"/>
            <img src={images.img8} alt="" className="lg:w-[49.5%]"/>
            <img src={images.img9} alt="" className="lg:w-[100%]"/>
            <img src={images.img10} alt="" className="lg:w-[49.5%]"/>
            <img src={images.img11} alt="" className="lg:w-[49.5%]"/>
            <img src={images.img12} alt="" className="lg:w-[100%]"/>
            <img src={images.img13} alt="" className="lg:w-[49.5%]"/>
            <img src={images.img14} alt="" className="lg:w-[49.5%]"/>
            <img src={images.img15} alt="" className="lg:w-[100%]"/>
            <img src={images.img16} alt="" className="lg:w-[49.5%]"/>
            <img src={images.img17} alt="" className="lg:w-[49.5%]"/>
            <img src={images.img18} alt="" className="lg:w-[100%]"/>
            <img src={images.img19} alt="" className="lg:w-[49.5%]"/>
            <img src={images.img20} alt="" className="lg:w-[49.5%]"/>
            <img src={images.img21} alt="" className="lg:w-[100%]"/>
            <img src={images.img22} alt="" className="lg:w-[49.5%]"/>
            <img src={images.img23} alt="" className="lg:w-[49.5%]"/>
            <img src={images.img24} alt="" className="lg:w-[100%]"/>
            <img src={images.img25} alt="" className="lg:w-[49.5%]"/>
            <img src={images.img26} alt="" className="lg:w-[49.5%]"/>
            <img src={images.img27} alt="" className="lg:w-[100%]"/>
            <img src={images.img28} alt="" className="lg:w-[49.5%]"/>
            <img src={images.img29} alt="" className="lg:w-[49.5%]"/>
            
            </div>  
      </div>
      <div>
      <h1 className="  heading  text-center  title-text text-4xl lg:text-7xl py-8">
            Features & Amenities
          </h1>

      </div>
      <div>

      </div>
    </div>
  );
};

export default PropertyDetails;
