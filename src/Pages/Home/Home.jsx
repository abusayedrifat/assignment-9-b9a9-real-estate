import { useEffect } from "react";
import Slider from "../../Components/Slider/Slider";
import InfoCard from "../../Components/Info-card/InfoCard";
import AboutUs from "../../Components/AboutUs/AboutUs";
import Villa from "../../Components/all properties/Villa/Villa";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const propertiesData = useLoaderData();
  return (
    <div>
      <Helmet> <title>LUXURY|Home</title>  </Helmet>
      <Slider></Slider>

      <InfoCard></InfoCard>

      <AboutUs></AboutUs>

      <div className="w-[95%] mx-auto  ">
        <h1 className="title-text text-4xl lg:text-7xl text-center mb-14 lg:mb-28 block ">
          All Properties
        </h1>
        <div className="grid grid-cols-1 gap-5 justify-center">
          {propertiesData.map((properties) => (
            <Villa key={properties.property_id} property={properties}></Villa>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
