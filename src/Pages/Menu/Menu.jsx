import React from "react";
import CoverBanner from "../../Components/CoverBanner/CoverBanner";
import Container from "../../Components/Container";
import Card from "../../Components/Food/Card";

function Menu() {
  return (
    <div>
      <CoverBanner heading={"Popular Foods Menu"} subHeading={"Menu"} />
      <div className="py-10 bg-bg-primary">
        <Container>
          <div className="py-3 bg-white shadow-lg rounded mb-10 px-5">
            <div className="lg:flex items-center justify-between gap-5">
              <div className="lg:w-1/2 w-full relative">
                <form action="">
                  <div className="lg:w-4/4 w-full bg-white p-3 rounded-full">
                    <input
                      type="text"
                      placeholder="Search What You Want|"
                      className="py-2 px-2 w-full rounded-full border"
                    />
                  </div>
                  <div>
                    <input
                      type="submit"
                      value="Search"
                      className="absolute bottom-[15px] lg:w-[120px] w-[105px] lg:left-[74%] left-[66%] text-white right-0 bg-primary px-1 py-[6px] rounded-full"
                    />
                  </div>
                </form>
              </div>
              <div className="lg:w-1/2 w-full">
                <ul className="flex flex-wrap space-x-3">
                  <li className="px-3 py-[6px] bg-primary text-white cursor-pointer lg:mb-0 mb-2 rounded">All</li>
                  <li className="px-3 py-[6px] bg-primary text-white cursor-pointer lg:mb-0 mb-2 rounded">Burger</li>
                  <li className="px-3 py-[6px] bg-primary text-white cursor-pointer lg:mb-0 mb-2 rounded">Pizza</li>
                  <li className="px-3 py-[6px] bg-primary text-white cursor-pointer lg:mb-0 mb-2 rounded">Chicken</li>
                  <li className="px-3 py-[6px] bg-primary text-white cursor-pointer lg:mb-0 mb-2 rounded">Desert</li>
                  <li className="px-3 py-[6px] bg-primary text-white cursor-pointer lg:mb-0 mb-2 rounded">Soft Drinks</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-5">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="py-10">
            {/* TODO Pagination Here */}
            <h4>Pagination Here</h4>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Menu;
