import React from "react";
import { Link } from "react-router-dom";

function OfferCard({ item }) {
  const { image, name, title, icon } = item;
  return (
    <div className="flex items-center gap-3 justify-between bg-white p-3 text-secondary">
      <div className="w-1/2">
        <img src={image} alt="" className="w-full rounded-s-md" />
      </div>
      <div className="w-1/2">
        <h2 className="text-[24px] font-semibold">{name}</h2>
        <p className="py-2 text-[15px] font-light">{title}</p>
        <div className="w-[30px] h-[30px] bg-primary flex items-center justify-center cursor-pointer text-white rounded-full">
          <Link to="/details" className=" ">
            {icon}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OfferCard;
