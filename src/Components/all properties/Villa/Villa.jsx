import PropTypes from "prop-types";
import "./Villa.css";
import { SlLocationPin } from "react-icons/sl";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { HiCurrencyDollar } from "react-icons/hi";
import { Link } from "react-router-dom";

const Villa = ({ property }) => {
  const {
    status,
    bathrooms,
    bedrooms,
    land_size,
    size,
    price,
    type,
    location,
    name,
    coverImg,
    property_id,
  } = property;
  return (
    <div className=" flex flex-col lg:flex-row gap-5 shadow-lg border rounded-xl p-4 poppi ">
      <div className="w-full lg:w-1/2 relative ">
        <img src={coverImg} alt="" className="rounded-lg lg:rounded-lg " />
        <button className="absolute top-4 left-4 rounded btn">{status}</button>
      </div>
      <div className="space-y-2 text-lg">
        <h2 className="text-xl font-bold">{name}</h2>
        <div className="flex items-center pt-4">
          <span className="mr-2">
            <SlLocationPin></SlLocationPin>
          </span>

          <p>
            {location.address} ,<span>{location.city}</span>
            <span> , {location.state}</span>
            <span>{location.country}</span>
          </p>
        </div>
        <p>
          Type : <b>{type}</b>
        </p>
        <p>
          {" "}
          Living area : <b>{size}</b>{" "}
        </p>
        <p>
          {" "}
          Land Size : <b>{land_size}</b>{" "}
        </p>
        <p>
          <span>
            <b>{bedrooms}</b> Bedrooms & <b>{bathrooms}</b> Bathrooms
          </span>
        </p>
        <p className="flex gap-2 items-center text-[#C28563]">
          <b>Price : {price} </b>
          <HiCurrencyDollar className="text-2xl "></HiCurrencyDollar>
        </p>
        <Link to={`/details/${property_id}`}>
          <button className="btn bg-[#0b5c52] text-[#C28563] view-button flex gap-2 ">
            View Details
            <BsBoxArrowUpRight className="text-lg -mt-2"></BsBoxArrowUpRight>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Villa;

Villa.propTypes = {
  property: PropTypes.node,
};
