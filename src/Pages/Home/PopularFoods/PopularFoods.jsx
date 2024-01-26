import React from "react";
import SectionTitle from "../../../Components/SectionTitle";
import Container from "../../../Components/Container";
import Card from "../../../Components/Food/Card";

function PopularFoods() {
  return (
    <div className="bg-bg-primary py-10">
      <Container>
        <div className="lg:flex items-center justify-between">
          <SectionTitle
            subHeading={"Food Menu"}
            heading={"Popular Delicious Foods"}
          />
          <div className="">
            <ul className="flex flex-wrap items-center space-x-3">
              <li className="px-3 py-2 bg-primary text-white cursor-pointer rounded-md lg:mb-0 mb-3">
                All Menu
              </li>
              <li className="px-3 py-2 bg-primary text-white cursor-pointer rounded-md lg:mb-0 mb-3">
                Burger
              </li>
              <li className="px-3 py-2 bg-primary text-white cursor-pointer rounded-md lg:mb-0 mb-3">
                Chicken
              </li>
              <li className="px-3 py-2 bg-primary text-white cursor-pointer rounded-md lg:mb-0 mb-3">
                Pizza
              </li>
              <li className="px-3 py-2 bg-primary text-white cursor-pointer rounded-md lg:mb-0 mb-3">
                Dessert
              </li>
            </ul>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Container>
    </div>
  );
}

export default PopularFoods;
