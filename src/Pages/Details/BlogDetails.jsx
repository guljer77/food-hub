import React from "react";
import CoverBanner from "../../Components/CoverBanner/CoverBanner";
import Container from "../../Components/Container";
import Details from "../../assets/blog_details.jpg";
import {
  FaUser,
  FaComments,
  FaCalendarAlt,
  FaRegEnvelope,
  FaPen,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";
import Review from "../../assets/client_1.png";

function BlogDetails() {
  return (
    <div>
      <CoverBanner heading={"Blog Details"} subHeading={"Blog Details"} />
      <div className="py-14">
        <Container>
          <div className="lg:flex items-start justify-between gap-5">
            <div className="lg:w-[75%] w-full">
              <img src={Details} alt="" />
              <div className="flex items-center justify-between py-5">
                <div className="flex items-center gap-2">
                  <span>
                    <FaUser />
                  </span>
                  <span>By Admin</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    <FaComments />
                  </span>
                  <span>12 Comments</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    <FaCalendarAlt />
                  </span>
                  <span>18 July 2022</span>
                </div>
              </div>
              <hr />
              <div className="py-10">
                <h4 className="text-[26px] font-bold text-secondary pb-3">
                  Different Spice For A Different Cheese Bruschetta
                </h4>
                <p className="text-[16px] font-extralight">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have ered alteration in some form,
                  by injected humour, or randomised word which dont look even
                  slightly believable. If you are going to use a passage of
                  Lorem Ipsulm you need to sure there isnt anything embarrassing
                  hidden in the middle of text. There are many variations of
                  passages of Lorem Ipsum available, but the majority have ered
                  alteration in some form, by injected humour, or randomised
                  word which dont look even slightly believable. If you are
                  going to use a passage of Lorem Ipsulm you need to sure there
                  isnt anything embarrassing hidden in the middle of text. There
                  are many variations of passages of Lorem Ipsum available, but
                  the majority have ered alteration in some form, by injected
                  humour, or randomised word which dont look even slightly
                  believable. If you are going to use a passage of Lorem Ipsulm
                  you need to sure there isnt anything embarrassing hidden in
                  the middle of text.
                </p>
              </div>
              <hr />
              <div className="py-5 flex items-center gap-5">
                <h4 className="text-[24px] font-bold text-secondary">
                  Share Now:
                </h4>
                <div className="flex items-center space-x-3">
                  <span className="w-[40px] h-[40px] bg-secondary text-white flex items-center justify-center rounded-full transition-all duration-300 hover:bg-primary cursor-pointer">
                    <FaFacebookF />
                  </span>
                  <span className="w-[40px] h-[40px] bg-secondary text-white flex items-center justify-center rounded-full transition-all duration-300 hover:bg-primary cursor-pointer">
                    <FaLinkedinIn />
                  </span>
                  <span className="w-[40px] h-[40px] bg-secondary text-white flex items-center justify-center rounded-full transition-all duration-300 hover:bg-primary cursor-pointer">
                    <FaTwitter />
                  </span>
                  <span className="w-[40px] h-[40px] bg-secondary text-white flex items-center justify-center rounded-full transition-all duration-300 hover:bg-primary cursor-pointer">
                    <FaPinterestP />
                  </span>
                </div>
              </div>
              <hr />
              <div className="p-5 bg-bg-primary my-5">
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
              </div>
              <div className="my-10 bg-bg-primary p-10">
                <h4 className="text-[24px] font-bold text-secondary pb-2">
                  Leave A Comment
                </h4>
                <p className="text-[15px] font-medium text-secondary pb-5">
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <div>
                  <form action="">
                    <div className="lg:flex items-center justify-between gap-5">
                      <div className="flex items-center justify-between mb-3 lg:w-1/2 w-full">
                        <span className="w-[10%] bg-primary/20 text-primary py-[11px] rounded-s-md flex items-center justify-center text-[18px]">
                          <FaUser />
                        </span>
                        <input
                          type="text"
                          placeholder="Name"
                          className="w-[90%] px-3 py-2 outline-0"
                        />
                      </div>
                      <div className="flex items-center justify-between mb-3 lg:w-1/2 w-full">
                        <span className="w-[10%] bg-primary/20 text-primary py-[11px] rounded-s-md flex items-center justify-center text-[18px]">
                          <FaRegEnvelope />
                        </span>
                        <input
                          type="email"
                          placeholder="Email"
                          className="w-[90%] px-3 py-2 outline-0"
                        />
                      </div>
                    </div>
                    <div className="flex items-start justify-between mb-3">
                      <span className="w-[10%] h-[240px] bg-primary/20 text-primary py-[11px] rounded-s-md flex items-start justify-center text-[18px]">
                        <FaPen />
                      </span>
                      <textarea
                        name=""
                        id=""
                        placeholder="Message"
                        className="p-3 w-[90%] h-[240px] resize-none outline-0"
                      ></textarea>
                    </div>
                    <div>
                      <input
                        type="submit"
                        value="Submit Comment"
                        className="px-5 py-2 text-white bg-primary rounded cursor-pointer"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="lg:w-[25%] w-full">
              <div className="p-5 bg-bg-primary rounded-md mb-10">
                <h4 className="text-[22px] font-bold text-primary pb-2">- Search</h4>
                <hr className="border-b border-primary" />
                <div className="py-5">
                  <form action="">
                    <input type="text" placeholder="Search" className="p-2 w-[70%] outline-0" />
                    <input type="submit" value="Submit" className="w-[30%] bg-primary text-white py-2" />
                  </form>
                </div>
              </div>
              <div className="p-5 bg-bg-primary rounded-md">
                <h4 className="text-[22px] font-bold text-primary pb-2">- Latest Post</h4>
                <hr className="border-b border-primary" />
                <div className="flex items-start justify-start gap-2 py-3">
                  <img src={Details} alt="" className="w-[40%] h-[120px]" />
                  <div className="w-[60%]">
                    <h4 className="text-[18px] font-semibold text-secondary pb-2">Mechanic at car service tire change the car.</h4>
                    <p className="flex items-center gap-2"><FaCalendarAlt /> 29 Oct 2022</p>
                  </div>
                </div>
                <div className="flex items-start justify-start gap-2 py-3">
                  <img src={Details} alt="" className="w-[40%] h-[120px]" />
                  <div className="w-[60%]">
                    <h4 className="text-[18px] font-semibold text-secondary pb-2">Mechanic at car service tire change the car.</h4>
                    <p className="flex items-center gap-2"><FaCalendarAlt /> 29 Oct 2022</p>
                  </div>
                </div>
                <div className="flex items-start justify-start gap-2 py-3">
                  <img src={Details} alt="" className="w-[40%] h-[120px]" />
                  <div className="w-[60%]">
                    <h4 className="text-[18px] font-semibold text-secondary pb-2">Mechanic at car service tire change the car.</h4>
                    <p className="flex items-center gap-2"><FaCalendarAlt /> 29 Oct 2022</p>
                  </div>
                </div>
                <div className="flex items-start justify-start gap-2 py-3">
                  <img src={Details} alt="" className="w-[40%] h-[120px]" />
                  <div className="w-[60%]">
                    <h4 className="text-[18px] font-semibold text-secondary pb-2">Mechanic at car service tire change the car.</h4>
                    <p className="flex items-center gap-2"><FaCalendarAlt /> 29 Oct 2022</p>
                  </div>
                </div>
                <div className="flex items-start justify-start gap-2 py-3">
                  <img src={Details} alt="" className="w-[40%] h-[120px]" />
                  <div className="w-[60%]">
                    <h4 className="text-[18px] font-semibold text-secondary pb-2">Mechanic at car service tire change the car.</h4>
                    <p className="flex items-center gap-2"><FaCalendarAlt /> 29 Oct 2022</p>
                  </div>
                </div>
                <div className="flex items-start justify-start gap-2 py-3">
                  <img src={Details} alt="" className="w-[40%] h-[120px]" />
                  <div className="w-[60%]">
                    <h4 className="text-[18px] font-semibold text-secondary pb-2">Mechanic at car service tire change the car.</h4>
                    <p className="flex items-center gap-2"><FaCalendarAlt /> 29 Oct 2022</p>
                  </div>
                </div>
                <div className="flex items-start justify-start gap-2 py-3">
                  <img src={Details} alt="" className="w-[40%] h-[120px]" />
                  <div className="w-[60%]">
                    <h4 className="text-[18px] font-semibold text-secondary pb-2">Mechanic at car service tire change the car.</h4>
                    <p className="flex items-center gap-2"><FaCalendarAlt /> 29 Oct 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default BlogDetails;
