import React from 'react'
import Container from "../../../Components/Container";
import SectionTitle from "../../../Components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Image from '../../../assets/chef_1.jpg';
import ChefCard from '../../../Components/Chef/ChefCard';

const chefData = [
  {
    name: 'Jesmin',
    title: "Senior Chef",
    image: Image,
    fLink:"https://www.facebook.com/",
    tLink:"https://www.facebook.com/",
    lLink:"https://www.facebook.com/",
    bLink:"https://www.facebook.com/",
  },
  {
    name: 'Jesmin',
    title: "Senior Chef",
    image: Image,
    fLink:"https://www.facebook.com/",
    tLink:"https://www.facebook.com/",
    lLink:"https://www.facebook.com/",
    bLink:"https://www.facebook.com/",
  },
  {
    name: 'Jesmin',
    title: "Senior Chef",
    image: Image,
    fLink:"https://www.facebook.com/",
    tLink:"https://www.facebook.com/",
    lLink:"https://www.facebook.com/",
    bLink:"https://www.facebook.com/",
  },
  {
    name: 'Jesmin',
    title: "Senior Chef",
    image: Image,
    fLink:"https://www.facebook.com/",
    tLink:"https://www.facebook.com/",
    lLink:"https://www.facebook.com/",
    bLink:"https://www.facebook.com/",
  },
  {
    name: 'Jesmin',
    title: "Senior Chef",
    image: Image,
    fLink:"https://www.facebook.com/",
    tLink:"https://www.facebook.com/",
    lLink:"https://www.facebook.com/",
    bLink:"https://www.facebook.com/",
  },
  {
    name: 'Jesmin',
    title: "Senior Chef",
    image: Image,
    fLink:"https://www.facebook.com/",
    tLink:"https://www.facebook.com/",
    lLink:"https://www.facebook.com/",
    bLink:"https://www.facebook.com/",
  },
  {
    name: 'Jesmin',
    title: "Senior Chef",
    image: Image,
    fLink:"https://www.facebook.com/",
    tLink:"https://www.facebook.com/",
    lLink:"https://www.facebook.com/",
    bLink:"https://www.facebook.com/",
  },
  {
    name: 'Jesmin',
    title: "Senior Chef",
    image: Image,
    fLink:"https://www.facebook.com/",
    tLink:"https://www.facebook.com/",
    lLink:"https://www.facebook.com/",
    bLink:"https://www.facebook.com/",
  },
  {
    name: 'Jesmin',
    title: "Senior Chef",
    image: Image,
    fLink:"https://www.facebook.com/",
    tLink:"https://www.facebook.com/",
    lLink:"https://www.facebook.com/",
    bLink:"https://www.facebook.com/",
  },
]

function ChefsSection() {
  return (
    <div className="py-10">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <SectionTitle
              subHeading={"Our Team"}
              heading={"Meet Our Expert Chefs"}
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
              420: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Autoplay, Navigation]}
          >
            {
              chefData.map((item, i)=><SwiperSlide key={i}>
                <ChefCard item={item} />
              </SwiperSlide>)
            }
          </Swiper>
        </div>
      </Container>
    </div>
  )
}

export default ChefsSection