import React from "react";
import "./about.css";
import CoverBanner from "../../Components/CoverBanner/CoverBanner";
import Container from "../../Components/Container";
import SectionTitle from "../../Components/SectionTitle";
import Image from "../../assets/why_choose_img.jpg";
import { IoFastFoodOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { RiEqualizerLine } from "react-icons/ri";
import { RiCustomerService2Line } from "react-icons/ri";
import { GiArcheryTarget } from "react-icons/gi";
import { FaRegLightbulb } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";

function About() {
  return (
    <div>
      <CoverBanner heading={"About Us"} subHeading={"About Us"} />
      <div className="py-10">
        <Container>
          <SectionTitle
            heading={"Why We Are The Best"}
            subHeading={"Why Choose Us"}
          />
          <p className="text-[16px] font-medium text-secondary lg:w-2/4 pb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius culpa,
            itaque repudiandae praesentium tempore quos, totam, facilis
            doloribus doloremque illo delectus.
          </p>
          <div className="lg:flex items-center justify-between gap-5 py-5">
            <div className="lg:w-3/5 w-full lg:mb-0 mb-5">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                <div className="p-5 w-full bg-gray-200 rounded-md -skew-y-3 border-s-2 border-primary">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-white bg-primary w-[80px] h-[40px] relative -left-8 flex items-center justify-center rounded text-[20px]">
                      <IoFastFoodOutline />
                    </span>
                    <div>
                      <h4 className="text-[20px] font-semibold text-secondary">
                        Fresh food
                      </h4>
                      <p className="text-[16px] font-light">
                        Objectively pontificate quality models before intuitive
                        information.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-5 w-full bg-gray-200 rounded-md -skew-y-3 border-s-2 border-primary">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-white bg-primary w-[80px] h-[40px] relative -left-8 flex items-center justify-center rounded text-[20px]">
                      <TbTruckDelivery />
                    </span>
                    <div>
                      <h4 className="text-[20px] font-semibold text-secondary">
                        Fast Delivery
                      </h4>
                      <p className="text-[16px] font-light">
                        Objectively pontificate quality models before intuitive
                        information.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-5 w-full bg-gray-200 rounded-md -skew-y-3 border-s-2 border-primary">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-white bg-primary w-[80px] h-[40px] relative -left-8 flex items-center justify-center rounded text-[20px]">
                      <RiEqualizerLine />
                    </span>
                    <div>
                      <h4 className="text-[20px] font-semibold text-secondary">
                        Quality Maintain
                      </h4>
                      <p className="text-[16px] font-light">
                        Objectively pontificate quality models before intuitive
                        information.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-5 w-full bg-gray-200 rounded-md -skew-y-3 border-s-2 border-primary">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-white bg-primary w-[80px] h-[40px] relative -left-8 flex items-center justify-center rounded text-[20px]">
                      <RiCustomerService2Line />
                    </span>
                    <div>
                      <h4 className="text-[20px] font-semibold text-secondary">
                        24/7 Service
                      </h4>
                      <p className="text-[16px] font-light">
                        Objectively pontificate quality models before intuitive
                        information.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-2/5 w-full">
              <img src={Image} alt="" className="w-full" />
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-chose py-14">
        <Container>
          <div className="flex items-center justify-between gap-5 lg:w-[50%] w-full bg-secondary py-5 rounded-md px-8 mb-7">
            <div className="w-[15%]">
              <span className="w-[70px] rotate-45 h-[70px] bg-primary text-white rounded flex items-center justify-center text-[32px]">
                <GiArcheryTarget />
              </span>
            </div>
            <div className="w-[85%]">
              <h3 className="text-white text-[18px] font-bold pb-2">Vision</h3>
              <p className="text-white text-[16px] font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                corporis perspiciatis voluptatum odit.
              </p>
            </div>
          </div>
          <div className="flex items-center lg:ml-20 ml-0 justify-between gap-5 lg:w-[50%] w-full bg-secondary py-5 rounded-md px-8 mb-7">
            <div className="w-[15%]">
              <span className="w-[70px] rotate-45 h-[70px] bg-primary text-white rounded flex items-center justify-center text-[32px]">
                <GiArcheryTarget />
              </span>
            </div>
            <div className="w-[85%]">
              <h3 className="text-white text-[18px] font-bold pb-2">Mission</h3>
              <p className="text-white text-[16px] font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                corporis perspiciatis voluptatum odit.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-5 lg:w-[50%] w-full bg-secondary py-5 rounded-md px-8">
            <div className="w-[15%]">
              <span className="w-[70px] rotate-45 h-[70px] bg-primary text-white rounded flex items-center justify-center text-[32px]">
                <IoDiamond />
              </span>
            </div>
            <div className="w-[85%]">
              <h3 className="text-white text-[18px] font-bold pb-2">Goals</h3>
              <p className="text-white text-[16px] font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                corporis perspiciatis voluptatum odit.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default About;
