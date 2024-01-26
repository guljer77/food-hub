import React, { useState } from "react";
import CoverBanner from "../../Components/CoverBanner/CoverBanner";
import Container from "../../Components/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Card from "../../Components/Food/Card";
import Image from "../../assets/menu2_img_6.jpg";
import Review from "../../assets/client_1.png";

function Details() {
  const [show, setShow] = useState(1);
  const toggleClick = id => {
    setShow(id);
  };
  console.log(show);
  return (
    <div>
      <CoverBanner heading={"Menu Details"} subHeading={"Menu Details"} />
      <div className="py-10">
        <Container>
          {/* Details-Data */}
          <div className="py-10">
            <div className="lg:flex items-start justify-between gap-5">
              <div className="lg:w-2/5 w-full">
                <img src={Image} alt="" className="w-full h-[590px]" />
              </div>
              <div className="lg:w-3/5 w-full">
                <h4 className="text-[32px] font-semibold text-secondary pb-2">
                  Maxican Pizza Test Better
                </h4>
                <h6 className="text-[24px] font-bold">$320.00</h6>
                <p className="text-[16px] font-light py-2">Ratings</p>
                <p className="text-[15px] font-extralight text-secondary pb-2 lg:w-3/4 w-full">
                  Pizza is a savory dish of Italian origin consisting of a
                  usually round, flattened base of leavened wheat-based dough
                  topped with tomatoes, cheese, and often various other
                  ingredients.
                </p>
                <div className="py-3">
                  <h4 className="text-[22px] font-medium">Select Size</h4>
                  <form action="">
                    <div className="flex items-center justify-between lg:w-2/5 w-full">
                      <span>
                        <input type="radio" name="item" value="350" />
                        Large
                      </span>
                      <span>+ $350</span>
                    </div>
                    <div className="flex items-center justify-between lg:w-2/5 w-full">
                      <span>
                        <input type="radio" name="item" value="250" />
                        Medium
                      </span>
                      <span>+ $250</span>
                    </div>
                    <div className="flex items-center justify-between lg:w-2/5 w-full">
                      <span>
                        <input type="radio" name="item" value="150" />
                        Small
                      </span>
                      <span>+ $150</span>
                    </div>
                  </form>
                </div>
                <div className="pb-3">
                  <h4 className="text-[22px] font-medium">
                    Select Option (Optional)
                  </h4>
                  <form action="">
                    <div className="flex items-center justify-between lg:w-2/5 w-full">
                      <div>
                        <input
                          type="checkbox"
                          id="vehicle1"
                          name="vehicle1"
                          value="15"
                        />
                        <label htmlFor="vehicle1"> Coca-Cola </label>
                      </div>
                      <span>+ $15</span>
                    </div>
                    <div className="flex items-center justify-between lg:w-2/5 w-full">
                      <div>
                        <input
                          type="checkbox"
                          id="vehicle1"
                          name="vehicle1"
                          value="10"
                        />
                        <label htmlFor="vehicle1"> 7up </label>
                      </div>
                      <span>+ $10</span>
                    </div>
                  </form>
                </div>
                <div className="mb-5">
                  <h4 className="text-[22px] font-medium mb-2">
                    Select Quentity
                  </h4>
                  <div className="flex items-center gap-5">
                    <div className="flex items-center justify-start">
                      <button className="w-[40px] h-[40px] flex items-center justify-center bg-primary text-white text-[24px]">
                        -
                      </button>
                      <span className="border py-[7px] w-[80px] px-2">
                        $ 230
                      </span>
                      <button className="w-[40px] h-[40px] flex items-center justify-center bg-primary text-white text-[24px]">
                        +
                      </button>
                    </div>
                    <span className="text-[26px] font-bold text-secondary">
                      Total: $520
                    </span>
                  </div>
                </div>
                <button className="px-5 py-2 bg-primary text-white rounded-md">
                  Add To Cart
                </button>
              </div>
            </div>
            <div></div>
          </div>
          <div className="py-10">
            <div>
              <button
                onClick={() => toggleClick(1)}
                className={`px-5 py-2 bg-secondary text-white ${
                  show === 1 ? "bg-primary" : ""
                }`}
              >
                <span className={`${show === 1 ? "bg-primary px-5 py-2" : ""}`}>
                  Details
                </span>
              </button>
              <button
                onClick={() => toggleClick(2)}
                className={`px-5 py-2 bg-secondary text-white `}
              >
                <span className={`${show === 2 ? "bg-primary px-5 py-2" : ""}`}>
                  Reviews
                </span>
              </button>
            </div>
            <hr className="border border-primary" />
            <div className="py-5">
              <div className={`${show === 1 ? "block" : "hidden"}`}>
                <p>
                  Ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
                  consectetur ullam in? Beatae, dolorum ad ea deleniti ratione
                  voluptatum similique omnis voluptas tempora optio soluta vero
                  veritatis reiciendis blanditiis architecto. Debitis nesciunt
                  inventore voluptate tempora ea incidunt iste, corporis, quo
                  cumque facere doloribus possimus nostrum sed magni quasi,
                  assumenda autem! Repudiandae nihil magnam provident illo alias
                  vero odit repellendus, ipsa nemo itaque. Aperiam fuga, magnam
                  quia illum minima blanditiis tempore. vero veritatis
                  reiciendis blanditiis architecto. Debitis nesciunt inventore
                  voluptate tempora ea incidunt iste, corporis, quo cumque
                  facere doloribus possimus nostrum sed magni quasi Ipsum dolor,
                  sit amet consectetur adipisicing elit. Doloribus consectetur
                  ullam in? Beatae, dolorum ad ea deleniti ratione voluptatum
                  similique omnis voluptas tempora optio soluta vero veritatis
                  reiciendis blanditiis architecto. Debitis nesciunt inventore
                  voluptate tempora ea incidunt iste, corporis, quo cumque
                  facere doloribus possimus nostrum sed magni quasi, assumenda
                  autem! Repudiandae nihil magnam provident illo alias vero odit
                  repellendus, ipsa nemo itaque. Aperiam fuga, magnam quia illum
                  minima blanditiis tempore. vero veritatis reiciendis
                  blanditiis architecto. Debitis nesciunt inventore voluptate
                  tempora ea incidunt iste, corporis, quo cumque facere
                  doloribus possimus nostrum sed magni quasi Ipsum dolor, sit
                  amet consectetur adipisicing elit. Doloribus consectetur ullam
                  in? Beatae, dolorum ad ea deleniti ratione voluptatum
                  similique omnis voluptas tempora optio soluta vero veritatis
                  reiciendis blanditiis architecto. Debitis nesciunt inventore
                  voluptate tempora ea incidunt iste, corporis, quo cumque
                  facere doloribus possimus nostrum sed magni quasi, assumenda
                  autem! Repudiandae nihil magnam provident illo alias vero odit
                  repellendus, ipsa nemo itaque. Aperiam fuga, magnam quia illum
                  minima blanditiis tempore. vero veritatis reiciendis
                  blanditiis architecto. Debitis nesciunt inventore voluptate
                  tempora ea incidunt iste, corporis, quo cumque facere
                  doloribus possimus nostrum sed magni quasi
                </p>
              </div>
              <div className={`${show === 2 ? "block" : "hidden"}`}>
                <div className="lg:flex items-start justify-between gap-5">
                  <div className="lg:w-3/5 w-full bg-gray-200 rounded-md p-5">
                    <h4 className="text-[24px] font-bold text-secondary pb-3">
                      04 Reviews
                    </h4>
                    <div className="flex items-center justify-between gap-3 pb-5">
                      <div className="w-1/6">
                        <img
                          src={Review}
                          alt=""
                          className="w-[90px] h-[90px] rounded-full bg-white p-1"
                        />
                      </div>
                      <div className="w-5/6">
                        <h4 className="text-[18px] font-semibold text-secondary pb-2">
                          Salina Khan
                        </h4>
                        <p className="text-[15px] font-extralight text-secondary">
                          29 Oct 2022
                        </p>
                        <p className="text-[15px] font-extralight text-secondary">
                          Ratings
                        </p>
                        <p className="text-[16px] font-light text-secondary">
                          Sure there is not anything embarrassing hiidden in the
                          middles of text. All erators on the Internet tend to
                          repeat predefined chunks
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="flex items-center justify-between gap-3 pb-5">
                      <div className="w-1/6">
                        <img
                          src={Review}
                          alt=""
                          className="w-[90px] h-[90px] rounded-full bg-white p-1"
                        />
                      </div>
                      <div className="w-5/6">
                        <h4 className="text-[18px] font-semibold text-secondary pb-2">
                          Salina Khan
                        </h4>
                        <p className="text-[15px] font-extralight text-secondary">
                          29 Oct 2022
                        </p>
                        <p className="text-[15px] font-extralight text-secondary">
                          Ratings
                        </p>
                        <p className="text-[16px] font-light text-secondary">
                          Sure there is not anything embarrassing hiidden in the
                          middles of text. All erators on the Internet tend to
                          repeat predefined chunks
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="flex items-center justify-between gap-3 pb-5">
                      <div className="w-1/6">
                        <img
                          src={Review}
                          alt=""
                          className="w-[90px] h-[90px] rounded-full bg-white p-1"
                        />
                      </div>
                      <div className="w-5/6">
                        <h4 className="text-[18px] font-semibold text-secondary pb-2">
                          Salina Khan
                        </h4>
                        <p className="text-[15px] font-extralight text-secondary">
                          29 Oct 2022
                        </p>
                        <p className="text-[15px] font-extralight text-secondary">
                          Ratings
                        </p>
                        <p className="text-[16px] font-light text-secondary">
                          Sure there is not anything embarrassing hiidden in the
                          middles of text. All erators on the Internet tend to
                          repeat predefined chunks
                        </p>
                      </div>
                    </div>
                    <hr />
                    
                  </div>
                  <div className="lg:w-2/5 w-full bg-bg-primary p-5 rounded-md">
                    <h4 className="text-[24px] font-bold text-secondary pb-3">
                      Write A Review
                    </h4>
                    <form action="">
                      <input
                        type="text"
                        placeholder="Name"
                        className="block w-full outline-0 p-2 rounded mb-3"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="block w-full outline-0 p-2 rounded mb-3"
                      />
                      <textarea
                        name=""
                        placeholder="Message"
                        id=""
                        cols="30"
                        rows="5"
                        className="block w-full outline-0 p-2 rounded mb-4 resize-none"
                      ></textarea>
                      <input
                        type="submit"
                        value="Submit Review"
                        className="px-5 py-2 bg-primary text-white rounded-md"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Related Item */}
          <div>
            <div className="flex items-center justify-between pb-10">
              <h4 className="text-[28px] font-bold text-secondary">
                Related Item
              </h4>
              <div className="flex items-center space-x-5">
                <div className="button-prev-slide w-[40px] h-[40px] bg-secondary flex items-center justify-center text-white rounded-full cursor-pointer transition-all duration-300 hover:bg-primary">
                  <FaArrowLeftLong />
                </div>
                <div className="button-next-slide w-[40px] h-[40px] bg-secondary flex items-center justify-center text-white rounded-full cursor-pointer transition-all duration-300 hover:bg-primary">
                  <FaArrowRightLong />
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
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                }}
                modules={[Autoplay, Navigation]}
              >
                <SwiperSlide>
                  <Card />
                </SwiperSlide>
                <SwiperSlide>
                  <Card />
                </SwiperSlide>
                <SwiperSlide>
                  <Card />
                </SwiperSlide>
                <SwiperSlide>
                  <Card />
                </SwiperSlide>
                <SwiperSlide>
                  <Card />
                </SwiperSlide>
                <SwiperSlide>
                  <Card />
                </SwiperSlide>
                <SwiperSlide>
                  <Card />
                </SwiperSlide>
                <SwiperSlide>
                  <Card />
                </SwiperSlide>
                <SwiperSlide>
                  <Card />
                </SwiperSlide>
                <SwiperSlide>
                  <Card />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Details;
