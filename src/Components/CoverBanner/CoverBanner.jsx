import React from "react";
import "./cover.css";
import Container from "../Container";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";

function CoverBanner({ heading, subHeading }) {
  return (
    <div className="cover-img">
      <Container>
        <div className="flex items-center justify-start w-full h-[70vh]">
          <div>
            <h4 className="text-[42px] font-bold text-white">{heading}</h4>
            <div className="flex items-center gap-1 text-white">
              <Link to='/' className="flex items-center gap-1 text-[18px] font-semibold"><IoHomeOutline className="text-[22px]" /> Home - </Link>
              <span className="text-[18px] font-semibold text-primary">{subHeading}</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CoverBanner;
