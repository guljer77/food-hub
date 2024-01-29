import React from "react";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function Card({item}) {
  return (
    <Link to={`/details/${item?._id}`} className="bg-gray-50 shadow-lg transition-all duration-500 ease-in-out hover:-translate-y-2">
      <img src={item?.image} alt="" className="w-full" />
      <div className="text-right">
        <p className="text-[16px] px-3 py-1 bg-primary text-white inline-block rounded-s-md relative -top-5">Chicken</p>
      </div>
      <div className="text-center py-5">
        <h4 className="text-[22px] font-semibold">{item?.name}</h4>
        <h6 className="text-[18px]">Ratings (26)</h6>
        <p className="text-[20px] font-semibold text-primary">$ <del>{item?.regularPrice}</del> {item?.offerPrice}</p>
      </div>
      <div className="flex items-center justify-between pb-5">
        <button className="px-5 py-[6px] rounded-e-md text-white bg-primary">
          Add To Cart
        </button>
        <Link to={`/details/${item?._id}`} className="p-2 border border-primary mr-3 rounded-md text-primary">
          <FaRegEye />
        </Link>
      </div>
    </Link>
  );
}

export default Card;
