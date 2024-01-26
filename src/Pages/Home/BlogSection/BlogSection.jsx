import React from 'react'
import Container from "../../../Components/Container";
import SectionTitle from "../../../Components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import BlogCard from '../../../Components/Blog/BlogCard';

function BlogSection() {
  return (
    <div className="py-10 bg-bg-primary">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <SectionTitle
              subHeading={"News & Blogs"}
              heading={"Our Latest Foods Blog"}
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
            slidesPerView={3}
            spaceBetween={10}
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
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            modules={[Autoplay, Navigation]}
          >
            <SwiperSlide><BlogCard /></SwiperSlide>
            <SwiperSlide><BlogCard /></SwiperSlide>
            <SwiperSlide><BlogCard /></SwiperSlide>
            <SwiperSlide><BlogCard /></SwiperSlide>
            <SwiperSlide><BlogCard /></SwiperSlide>
            <SwiperSlide><BlogCard /></SwiperSlide>
            <SwiperSlide><BlogCard /></SwiperSlide>
            <SwiperSlide><BlogCard /></SwiperSlide>
            <SwiperSlide><BlogCard /></SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </div>
  )
}

export default BlogSection