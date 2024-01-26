import React from "react";
import Image from "../../assets/menu2_img_1.jpg";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div className="bg-white shadow-lg transition-all duration-500 ease-in-out hover:-translate-y-2">
      <img src={Image} alt="" className="w-full" />
      <div className="text-right">
        <p className="text-[16px] px-3 py-1 bg-primary text-white inline-block rounded-s-md relative -top-5">Chicken</p>
      </div>
      <div className="text-center py-5">
        <h4 className="text-[22px] font-semibold">Hyderabadi Biryani</h4>
        <h6 className="text-[18px]">Ratings</h6>
        <p className="text-[20px] font-semibold text-primary">$ 25</p>
      </div>
      <div className="flex items-center justify-between pb-5">
        <button className="px-5 py-[6px] rounded-e-md text-white bg-primary">
          Add To Cart
        </button>
        <Link className="p-2 border border-primary mr-3 rounded-md text-primary">
          <FaRegEye />
        </Link>
      </div>
    </div>
  );
}

export default Card;
