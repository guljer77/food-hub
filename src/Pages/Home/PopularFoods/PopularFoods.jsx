import React from "react";
import SectionTitle from "../../../Components/SectionTitle";
import Container from "../../../Components/Container";

function PopularFoods({handleClick, result}) {
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
              <button onClick={handleClick} value="" className="px-3 py-2 bg-primary text-white cursor-pointer rounded-md lg:mb-0 mb-3">
                All Menu
              </button>
              <button onClick={handleClick} value="Burger" className="px-3 py-2 bg-primary text-white cursor-pointer rounded-md lg:mb-0 mb-3">
                Burger
              </button>
              <button onClick={handleClick} value="Chicken" className="px-3 py-2 bg-primary text-white cursor-pointer rounded-md lg:mb-0 mb-3">
                Chicken
              </button>
              <button onClick={handleClick} value="Pizza" className="px-3 py-2 bg-primary text-white cursor-pointer rounded-md lg:mb-0 mb-3">
                Pizza
              </button>
              <button onClick={handleClick} value="Dessert" className="px-3 py-2 bg-primary text-white cursor-pointer rounded-md lg:mb-0 mb-3">
                Dessert
              </button>
            </ul>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
          {result}
        </div>
      </Container>
    </div>
  );
}

export default PopularFoods;
