import React, { useState } from "react";
import CoverBanner from "../../Components/CoverBanner/CoverBanner";
import Container from "../../Components/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Card from "../../Components/Food/Card";
import { useMenu } from "../../Hooks/useMenu";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useCartData } from "../../Hooks/useCart";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { useComments } from "../../Hooks/useComments";
import Ratings from "./Ratings";

function Details() {
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCartData();
  const { user } = useAuth();
  const [foods] = useMenu();
  const { id } = useParams();
  const [axiosSecure] = useAxiosSecure();
  const finalItem = foods.find(item => item?._id === id);
  const categoryItem = foods.filter(
    item => item?.category === finalItem?.category
  );

  //details-reviews-tabs
  const [show, setShow] = useState(1);
  const toggleClick = id => {
    setShow(id);
  };

  //product-quantity
  const [increMent, setIncrement] = useState(1);
  const toggleIncrement = () => {
    if (increMent) {
      setIncrement(increMent + 1);
    }
  };
  const toggleDecrement = () => {
    if (increMent > 1) {
      setIncrement(increMent - 1);
    }
  };

  //add-product
  const addProduct = () => {
    if (user && user?.email) {
      const orderItem = {
        name: finalItem?.name,
        offerPrice: finalItem?.offerPrice,
        image: finalItem?.image,
        email: user?.email,
        quantity: increMent,
        price: increMent * finalItem?.offerPrice,
      };
      axiosSecure.post(`/userFoods`, orderItem).then(data => {
        if (data.data.insertedId) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Food Add to cart Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } else {
      Swal.fire({
        title: "Please Login before order to Food?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then(result => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  //comments
  const [comments, reload] = useComments();
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  //comments
  const onSubmit = data => {
    const commentsItem = {
      name: data.name,
      ratings: data.select_ratings,
      message: data.message,
      image: user?.photoURL,
      product_Id: id,
      date: new Date().toLocaleDateString(),
    };
    if (user) {
      axiosSecure.post(`/comments`, commentsItem).then(data => {
        if (data.data.insertedId) {
          reload();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Comments Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } else {
      Swal.fire({
        title: "Please Login before your Comment?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then(result => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
    reset();
  };
  const productMatchComments = comments.filter(
    items => items?.product_Id === id
  );
  return (
    <div>
      <CoverBanner heading={"Menu Details"} subHeading={"Menu Details"} />
      <div className="py-10">
        <Container>
          {/* Details-Data */}
          <div className="py-10">
            <div className="lg:flex items-start justify-between gap-5">
              <div className="lg:w-2/5 w-full">
                <img
                  src={finalItem?.image}
                  alt=""
                  className="w-full h-[450px]"
                />
              </div>
              <div className="lg:w-3/5 w-full">
                <h4 className="text-[32px] font-semibold text-secondary pb-2">
                  {finalItem?.name}
                </h4>
                <div>
                  <Ratings />
                </div>
                <h6 className="text-[24px] font-bold">
                  $ <del className="text-red-600">{finalItem?.regularPrice}</del>
                  {finalItem?.offerPrice}
                </h6>
                <p className="text-[16px] font-light py-2">Ratings (26)</p>
                <p className="text-[15px] font-extralight text-secondary pb-2 lg:w-3/4 w-full">
                  {finalItem?.description}
                </p>
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
                      <button
                        onClick={toggleDecrement}
                        className="w-[40px] h-[40px] flex items-center justify-center bg-primary text-white text-[24px]"
                      >
                        -
                      </button>
                      <span className="border py-[7px] w-[80px] px-2">
                        {increMent}
                      </span>
                      <button
                        onClick={toggleIncrement}
                        className="w-[40px] h-[40px] flex items-center justify-center bg-primary text-white text-[24px]"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-[26px] font-bold text-secondary">
                      Total: $ {increMent * parseFloat(finalItem?.offerPrice)}
                    </span>
                  </div>
                </div>
                <button
                  onClick={addProduct}
                  className="px-5 py-2 bg-primary text-white rounded-md"
                >
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
                      {productMatchComments.length} Reviews
                    </h4>
                    {productMatchComments.map(item => (
                      <div key={item?._id}>
                        <div className="flex items-start justify-between gap-3 pb-5">
                          <div className="w-1/6">
                            <img
                              src={item?.image}
                              alt=""
                              className="w-[90px] h-[90px] rounded-full bg-white p-1"
                            />
                          </div>
                          <div className="w-5/6">
                            <h4 className="text-[18px] font-semibold text-secondary pb-2">
                              {item?.name}
                            </h4>
                            <p className="text-secondary text-[17px] font-semibold">
                              {item?.date}
                            </p>
                            <p className="text-[15px] font-extralight text-secondary flex items-center gap-3">
                              <Ratings stars={parseFloat(item?.ratings)} />
                            </p>
                            <p className="text-[16px] font-light text-secondary">
                              {item?.message}
                            </p>
                          </div>
                        </div>
                        <hr />
                      </div>
                    ))}
                  </div>
                  <div className="lg:w-2/5 w-full bg-bg-primary p-5 rounded-md">
                    <h4 className="text-[24px] font-bold text-secondary pb-3">
                      Write A Review
                    </h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div>
                        <select
                          {...register("select_ratings", { required: true })}
                          className="block w-full outline-0 p-2 rounded mb-3"
                        >
                          <option value="">Select Your Ratings</option>
                          <option value="1">1</option>
                          <option value="1.5">1.5</option>
                          <option value="2">2</option>
                          <option value="2.5">2.5</option>
                          <option value="3">3</option>
                          <option value="3.5">3.5</option>
                          <option value="4">4</option>
                          <option value="4.5">4.5</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                      <input
                        type="text"
                        placeholder="Name"
                        {...register("name", { required: true })}
                        className="block w-full outline-0 p-2 rounded mb-3"
                      />
                      <textarea
                        placeholder="Message"
                        cols="30"
                        rows="5"
                        {...register("message", { required: true })}
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
                {categoryItem?.map((item, i) => (
                  <SwiperSlide key={i}>
                    <Card item={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Details;
