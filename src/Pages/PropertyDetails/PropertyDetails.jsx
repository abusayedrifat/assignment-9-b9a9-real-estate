import { useLoaderData, useParams } from "react-router-dom";
import "./propertyDetails.css";
import { useEffect } from "react";
import { BiArea } from "react-icons/bi";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtub } from "react-icons/pi";
import { GrHome } from "react-icons/gr";
import { Helmet } from "react-helmet-async";

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
    features,
    bathrooms,
    bedrooms,
    land_size,
    size,
    price,
    location,
    name,
    status,
    coverImg,
    description,
  } = exactPropertyData;
  console.log(exactPropertyData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>LUXURY | Property-Details</title>
      </Helmet>
      <div className="relative">
        <img src={coverImg} alt="" />
        <div className=" shading h-full w-full absolute top-0"></div>
        <h1 className=" absolute heading  text-center top-[25%] lg:top-[30%] left-[50%] -translate-x-[50%] title-text lg:font-extrabold text-4xl lg:text-7xl py-2">
          {name}
        </h1>
      </div>
      <div className="h-screen pt-24 lg:pt-48 bg-[#08413a] text-[#C28563]">
        <h1 className="text-center  title-text font-extrabold text-4xl text-[#0b0b0b] lg:text-6xl py-8">
          Description
        </h1>
        <p className="w-[80%] lg:w-[70%] mx-auto text-center poppi font-[300]  lg:text-lg text-[#C28563] lg:leading-9">
          {description}
        </p>
      </div>
      <div className="pt-20 pb-10 px-3 ">
        <h1 className="  heading  text-center  title-text font-extrabold text-4xl lg:text-7xl py-8">
          Explore
        </h1>
        <div className="flex flex-wrap justify-center gap-3 lg:gap-2  w-full">
          <img src={images.img1} alt="" className="lg:w-[49.5%]" />
          <img src={images.img2} alt="" className="lg:w-[49.5%]" />
          <img src={images.img3} alt="" className="lg:w-[100%]" />
          <img src={images.img4} alt="" className="lg:w-[49.5%]" />
          <img src={images.img5} alt="" className="lg:w-[49.5%]" />
          <img src={images.img6} alt="" className="lg:w-[100%]" />
          <img src={images.img7} alt="" className="lg:w-[49.5%]" />
          <img src={images.img8} alt="" className="lg:w-[49.5%]" />
          <img src={images.img9} alt="" className="lg:w-[100%]" />
          <img src={images.img10} alt="" className="lg:w-[49.5%]" />
          <img src={images.img11} alt="" className="lg:w-[49.5%]" />
          <img src={images.img12} alt="" className="lg:w-[100%]" />
          <img src={images.img13} alt="" className="lg:w-[49.5%]" />
          <img src={images.img14} alt="" className="lg:w-[49.5%]" />
          <img src={images.img15} alt="" className="lg:w-[100%]" />
          <img src={images.img16} alt="" className="lg:w-[49.5%]" />
          <img src={images.img17} alt="" className="lg:w-[49.5%]" />
          <img src={images.img18} alt="" className="lg:w-[100%]" />
          <img src={images.img19} alt="" className="lg:w-[49.5%]" />
          <img src={images.img20} alt="" className="lg:w-[49.5%]" />
          <img src={images.img21} alt="" className="lg:w-[100%]" />
          <img src={images.img22} alt="" className="lg:w-[49.5%]" />
          <img src={images.img23} alt="" className="lg:w-[49.5%]" />
          <img src={images.img24} alt="" className="lg:w-[100%]" />
          <img src={images.img25} alt="" className="lg:w-[49.5%]" />
          <img src={images.img26} alt="" className="lg:w-[49.5%]" />
          <img src={images.img27} alt="" className="lg:w-[100%]" />
          <img src={images.img28} alt="" className="lg:w-[49.5%]" />
          <img src={images.img29} alt="" className="lg:w-[49.5%]" />
        </div>
      </div>

      <div className="w-[50%] lg:w-[40%] ml-12 mr-16 lg:ml-48 space-y-5 title-text text-[#313131]">
        <button className="btn bg-[#0b5c52] text-[#C28563] rounded-none">
          {status}
        </button>
        <div className="border-t border-[#969696] w-full"></div>
        <p className=" text-4xl lg:text-5xl"> $ {price} </p>
      </div>

      <div className="my-16 flex flex-col lg:flex-row justify-between mx-12 lg:mx-48 text-[#313131] space-y-10 ">
        <div className="title-text lg:mt-20">
          <p className="text-3xl lg:text-4xl">{location.address}</p>
          <p className="text-xl lg:text-2xl">
            <span>{location.city},</span> <span> {location.country} </span>
          </p>
        </div>
        <div className="border-l hidden lg:block h-80 border-[#969696] lg:ml-52"></div>

        <div className="flex flex-col  gap-8 text-left ">

          <div className="flex gap-9">
            <IoBedOutline className="text-4xl text-[#545454] lg:6xl" ></IoBedOutline>
            <p className=" text-xl">
              <b> {bedrooms} </b> Bedrooms
            </p>
          </div>
          <div className="flex items-center gap-9">
            <PiBathtub className="text-4xl text-[#545454] lg:6xl" ></PiBathtub>
            <p className=" text-xl">
              <b> {bathrooms} </b> Bathrooms
            </p>
          </div>
          <div className="flex items-center gap-9">
            <GrHome className="text-4xl text-[#545454] lg:6xl" ></GrHome>
            <p className=" text-xl">
              <b> {size} </b>  Living Area
            </p>
          </div>
          <div className="flex  gap-9">
            <BiArea className="text-4xl text-[#545454] lg:6xl" ></BiArea>
             <p className=" text-xl">
              <b> {land_size} </b> Land Size
            </p>
          </div>
        </div>
      </div>

      <div>
        <h1 className="  heading  text-center  title-text text-4xl lg:text-7xl py-8">
          Features & Amenities
        </h1>

        <div className="flex flex-col lg:flex-row w-[90%] mx-auto gap-52 my-20 ">
          <div className=" lg:w-1/2 ">
            <h1 className="title-text text-5xl pb-4 border-b border-gray-400 w-full">
              Interiror
            </h1>
            <p className="text-xl poppi font-light leading-10 text-[#000000bd]">
              <p className="pt-4 pb-2 text-xl font-extrabold">Features</p>
              <li>{features.interior[0]}</li>
              <li>{features.interior[1]}</li>
              <li>{features.interior[2]}</li>
              <li>{features.interior[3]}</li>
              <li>{features.interior[4]}</li>
              <li>{features.interior[5]}</li>
              <li>{features.interior[6]}</li>
              <li>{features.interior[7]}</li>
              
              
            </p>
            <p className="text-xl poppi font-light leading-10 text-[#000000bd]">
              <p className=" pb-2 text-xl font-extrabold pt-10">Amenities</p>
              <li>{amenities.interior[0]}</li>
              <li>{amenities.interior[1]}</li>
              <li>{amenities.interior[2]}</li>
              <li>{amenities.interior[3]}</li>
              <li>{amenities.interior[4]}</li>
              <li>{amenities.interior[5]}</li>
              <li>{amenities.interior[6]}</li>
              <li>{amenities.interior[7]}</li>
              <li>{amenities.interior[8]}</li>
              
            </p>
          </div>
          <div className=" lg:w-1/2 ">
            <h1 className="title-text text-5xl pb-4 border-b border-gray-400 w-full">
              Exterior
            </h1>
            <p className="text-xl poppi font-light leading-10 text-[#000000bd]">
              <p className="pt-4 pb-2 text-xl font-extrabold">Features</p>
               <li>{features.exterior[0]}</li>
               <li>{features.exterior[1]}</li>
               <li>{features.exterior[2]}</li>
               <li>{features.exterior[3]}</li>
               <li>{features.exterior[4]}</li>
               <li>{features.exterior[5]}</li>
               <li>{features.exterior[6]}</li>
               <li>{features.exterior[7]}</li>
            </p>
            <p className="text-xl poppi font-light leading-10 text-[#000000bd]">
              <p className="pb-2 text-xl font-extrabold pt-10">Amenities</p>
               <li>{amenities.exterior[0]}</li>
               <li>{amenities.exterior[1]}</li>
               <li>{amenities.exterior[2]}</li>
               <li>{amenities.exterior[3]}</li>
               <li>{amenities.exterior[4]}</li>
               <li>{amenities.exterior[5]}</li>
               <li>{amenities.exterior[6]}</li>
               <li>{amenities.exterior[7]}</li>
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default PropertyDetails;
