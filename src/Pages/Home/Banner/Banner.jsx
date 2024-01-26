import React from "react";
import "./banner.css";
import Container from "../../../Components/Container";

function Banner({search, searchResult, foodItem}) {
  return (
    <div className="bg-banner py-20">
      <Container>
        <div className="flex items-center justify-start w-full h-auto">
          <div>
            <div>
              <h4 className="text-[24px] font-semibold italic text-primary">
                Satisfy Your Cravings
              </h4>
              <h2 className="text-white leading-[3rem] py-3 text-[42px] font-bold lg:w-3/5">
                Delicious Foods With Wonderful Eating
              </h2>
              <p className="text-[16px] font-medium text-white lg:w-3/5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
                fugit minimaet debitis ut distinctio optio.
              </p>
            </div>
            <div className="pt-10">
              <form action="">
                <div className="lg:w-3/4 w-full bg-white p-3 rounded-full">
                  <input
                    type="text"
                    value={search}
                    onChange={searchResult}
                    placeholder="Search What You Want|"
                    className="py-2 px-2 w-full rounded-full border"
                  />
                </div>
                <div>
                  <input
                    type="submit"
                    value="Search"
                    className="relative bottom-[51px] lg:left-[63%] left-[73%] text-white right-0 bg-primary px-3 py-[6px] rounded-full"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
