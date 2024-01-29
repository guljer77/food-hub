import React from "react";
import Container from "../../../Components/Container";
import SectionTitle from "../../../Components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import MenuImage from '../../../assets/menu2_img_1.jpg';
import { FaRegEye } from "react-icons/fa";
import OfferCard from "./OfferCard";

const menuOffer = [
  {
    image: MenuImage,
    name: "Beef Masala",
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, sed!",
    icon: <FaRegEye />
  },
  {
    image: MenuImage,
    name: "Beef Masala",
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, sed!",
    icon: <FaRegEye />
  },
  {
    image: MenuImage,
    name: "Beef Masala",
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, sed!",
    icon: <FaRegEye />
  },
  {
    image: MenuImage,
    name: "Beef Masala",
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, sed!",
    icon: <FaRegEye />
  },
  {
    image: MenuImage,
    name: "Beef Masala",
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, sed!",
    icon: <FaRegEye />
  },
  {
    image: MenuImage,
    name: "Beef Masala",
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, sed!",
    icon: <FaRegEye />
  },
  {
    image: MenuImage,
    name: "Beef Masala",
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, sed!",
    icon: <FaRegEye />
  },
  {
    image: MenuImage,
    name: "Beef Masala",
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, sed!",
    icon: <FaRegEye />
  },
]

function DailyOffer() {
  return (
    <div className="py-10 bg-bg-primary">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <SectionTitle
              subHeading={"Daily Offer"}
              heading={"Up To 75% Off For This Day"}
            />
          </div>
          <div className="lg:block hidden">
            <div className="flex items-center space-x-5">
              <div className="button-prev-slide w-[40px] h-[40px] bg-secondary flex items-center justify-center text-white rounded-full cursor-pointer transition-all duration-300 hover:bg-primary">
                <FaArrowLeftLong />
              </div>
              <div className="button-next-slide w-[40px] h-[40px] bg-secondary flex items-center justify-center text-white rounded-full cursor-pointer transition-all duration-300 hover:bg-primary">
                <FaArrowRightLong />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            navigation={{
              nextEl: ".button-next-slide",
              prevEl: ".button-prev-slide",
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              420: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
            }}
            modules={[Autoplay, Navigation]}
          >
            {
              menuOffer.map((item, i)=>  <SwiperSlide key={i}>
                <OfferCard item={item} />
              </SwiperSlide>)
            }
          </Swiper>
        </div>
      </Container>
    </div>
  );
}

export default DailyOffer;
