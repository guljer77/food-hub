import React from "react";
import Image from "../../assets/blog_2.jpg";
import { Link } from "react-router-dom";
import { FaComments } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Author from '../../assets/chef_1.jpg';

function BlogCard() {
  return (
    <div className="bg-white shadow-lg transition-all p-3 rounded-md duration-500 ease-in-out hover:-translate-y-1">
      <img src={Image} alt="" className="w-full" />
      <div className="text-right">
        <p className="text-[16px] px-3 py-1 bg-primary text-white inline-block rounded-s-md relative -top-5">
          Chicken
        </p>
      </div>
      <div className="flex items-center gap-2">
        <img src={Author} alt="" className="w-[50px] h-[50px] bg-primary p-1 rounded-full" />
        <div>
          <h4 className="text-[16px] font-medium">Moni Islam</h4>
          <h6 className="text-[14px] font-light">14 May 2026</h6>
        </div>
      </div>
      <div className="py-5">
        <Link className="text-[22px] font-bold mb-3 block">
          Tender fried baby squid with a salt, pepper
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In nobis
          repellat a dicta nesciunt officiis exercitationem deleniti suscipit
          iste obcaecati......
        </p>
      </div>
      <hr className="block w-full" />
      <div className="flex items-end justify-start pt-3 w-full">
        <div className="flex items-center justify-between w-full">
          <Link className="text-secondary flex items-center gap-2 text-[16px] transition-all duration-300 hover:text-primary">
            Read More
            <FaArrowRightLong />
          </Link>
          <span className="flex items-center gap-2">
            <FaComments /> 120
          </span>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
