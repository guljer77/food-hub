import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaBehance } from "react-icons/fa";
import { Link } from "react-router-dom";

function ChefCard({ item }) {
  const { name, image, title, fLink, tLink, lLink, bLink } = item;
  return (
    <div className="bg-bg-primary p-10 rounded-lg shadow-md transition-all duration-500 ease-in-out hover:-translate-y-2">
      <div className="w-[170px] h-[170px] rounded-full bg-white shadow-lg mx-auto flex items-center justify-center">
        <img
          src={image}
          alt=""
          className="w-[160px] h-[160px] mx-auto rounded-full bg-primary p-2"
        />
      </div>
      <div className="text-center pt-5">
        <h4 className="text-[24px] font-semibold">{name}</h4>
        <h6 className="text-[16px]">{title}</h6>
      </div>
      <div className="flex items-center justify-center space-x-3 py-5">
        <Link to={fLink} className="p-3 bg-primary/20 rounded-full text-primary"><FaFacebookF /></Link>
        <Link to={lLink} className="p-3 bg-primary/20 rounded-full text-primary"><FaLinkedinIn /></Link>
        <Link to={tLink} className="p-3 bg-primary/20 rounded-full text-primary"><FaTwitter /></Link>
        <Link to={bLink} className="p-3 bg-primary/20 rounded-full text-primary"><FaBehance /></Link>
      </div>
    </div>
  );
}

export default ChefCard;
