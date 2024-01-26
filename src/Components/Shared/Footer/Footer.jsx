import React from "react";
import "./footer.css";
import Container from "../../Container";
import { FaCaretRight } from "react-icons/fa6";
import { FaMapMarkerAlt, FaRegEnvelopeOpen } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";

function Footer() {
  return (
    <div className="z-40">
      <div className="bg-footer py-10">
        <Container>
          <div className="flex items-center justify-center w-full h-auto text-white">
            <div className="lg:grid grid-cols-4 gap-5">
              <div className="lg:pb-0 pb-10">
                <h4 className="text-[18px] font-medium uppercase text-white">
                  CONTACT US
                </h4>
                <hr className="border-[1.5px] border-primary w-20" />
                <div className="pt-10">
                  <div className="flex items-start gap-2 pb-5">
                    <span className="block text-[18px]">
                      <FaMapMarkerAlt />
                    </span>
                    <p className="block text-[15px] text-white/70">
                      <span className="text-[15px] font-semibold text-white">
                        Address:
                      </span>{" "}
                      8901 Marmora Road, Glasgow D04 89 GR, New York
                    </p>
                  </div>
                  <div className="flex items-start gap-2 pb-5">
                    <span className="block text-[18px]">
                      <FaRegEnvelopeOpen />
                    </span>
                    <p className="block text-[15px] text-white/70">
                      <span className="text-[15px] font-semibold text-white">
                        Email:
                      </span>{" "}
                      guljer.net@gmail.com
                    </p>
                  </div>
                  <div className="flex items-start gap-2 pb-5">
                    <span className="block text-[18px]">
                      <FaSquarePhone />
                    </span>
                    <p className="block text-[15px] text-white/70">
                      <span className="text-[15px] font-semibold text-white">
                        Telephone:
                      </span>{" "}
                      +880 1792790977
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:pb-0 pb-10">
                <h4 className="text-[18px] font-medium uppercase text-white">
                  INFORMATION
                </h4>
                <hr className="border-[1.5px] border-primary w-20" />
                <div className="pt-10">
                  <div>
                    <ul className="flex flex-col space-y-4">
                      <li className="flex items-center gap-3 text-white/60 cursor-pointer transition-all duration-300 hover:text-white">
                        <FaCaretRight /> About Us
                      </li>
                      <li className="flex items-center gap-3 text-white/60 cursor-pointer transition-all duration-300 hover:text-white">
                        <FaCaretRight />
                        Stores
                      </li>
                      <li className="flex items-center gap-3 text-white/60 cursor-pointer transition-all duration-300 hover:text-white">
                        <FaCaretRight /> Privacy Policy
                      </li>
                      <li className="flex items-center gap-3 text-white/60 cursor-pointer transition-all duration-300 hover:text-white">
                        <FaCaretRight />
                        Terms & Conditions
                      </li>
                      <li className="flex items-center gap-3 text-white/60 cursor-pointer transition-all duration-300 hover:text-white">
                        <FaCaretRight /> Testimonials
                      </li>
                      <li className="flex items-center gap-3 text-white/60 cursor-pointer transition-all duration-300 hover:text-white">
                        <FaCaretRight /> Jobs
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="lg:pb-0 pb-10">
                <h4 className="text-[18px] font-medium uppercase text-white">
                  MY ACCOUNT
                </h4>
                <hr className="border-[1.5px] border-primary w-20" />
                <div className="pt-10">
                  <div>
                    <ul className="flex flex-col space-y-4">
                      <li className="flex items-center gap-3 text-white/60 cursor-pointer transition-all duration-300 hover:text-white">
                        <FaCaretRight /> My Account
                      </li>
                      <li className="flex items-center gap-3 text-white/60 cursor-pointer transition-all duration-300 hover:text-white">
                        <FaCaretRight /> Order History
                      </li>
                      <li className="flex items-center gap-3 text-white/60 cursor-pointer transition-all duration-300 hover:text-white">
                        <FaCaretRight /> Download
                      </li>
                      <li className="flex items-center gap-3 text-white/60 cursor-pointer transition-all duration-300 hover:text-white">
                        <FaCaretRight />
                        Newsletter Subscription
                      </li>
                      <li className="flex items-center gap-3 text-white/60 cursor-pointer transition-all duration-300 hover:text-white">
                        <FaCaretRight /> Transactions
                      </li>
                      <li className="flex items-center gap-3 text-white/60 cursor-pointer transition-all duration-300 hover:text-white">
                        <FaCaretRight /> Wishlist
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="lg:pb-0 pb-10">
                <h4 className="text-[18px] uppercase font-medium text-white">
                  OUR NEWSLETTER
                </h4>
                <hr className="border-[1.5px] border-primary w-20" />
                <div className="pt-10">
                  <p className="text-[15px] font-light pb-5 text-white/75">
                    Subscribe to the Faster Shopping list to receive updates on
                    new arrivals.
                  </p>
                  <div className="flex items-center border w-full p-[4px]">
                    <input
                      type="text"
                      className="px-2 py-2 outline-0 bg-transparent block"
                      placeholder="Your Email"
                    />
                    <input
                      type="submit"
                      value="Subscribe"
                      className="text-[15px] uppercase block cursor-pointer text-white bg-primary absolute lg:right-24 right-10 px-2 py-[6px] rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="text-center bg-primary py-5 text-white">
        <p className="text-[16px] font-medium">
          Copyright &copy; Guljer 2024. All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
