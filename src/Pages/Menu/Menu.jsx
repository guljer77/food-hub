import React, { useState } from "react";
import CoverBanner from "../../Components/CoverBanner/CoverBanner";
import Container from "../../Components/Container";
import Card from "../../Components/Food/Card";
import { useMenu } from "../../Hooks/useMenu";

function Menu() {
  const [foods] = useMenu();
  const [search, setSearch] = useState("");
  const [foodItem, setFoodItem] = useState([]);
  const [category, setCategory] = useState(null);
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 6;
  //calculate page
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemPerPage;
    let endIndex = startIndex + itemPerPage;
    endIndex = Math.min(endIndex, foods.length);
    return { startIndex, endIndex };
  };
  //next page
  const nextPage = () => {
    if (currentPage < Math.ceil(foods.length / itemPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  //previousPage
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  //search
  const searchResult = event => {
    const searchFilter = event.target.value;
    setSearch(searchFilter);
    const filterData = foods.filter(item =>
      item?.name.toLowerCase().includes(searchFilter.toLowerCase())
    );
    setFoodItem(filterData);
  };
  //button-click
  const handleClick = event => {
    setCategory(event.target.value);
  };
  //main-function
  const mainFunction = (foods, selected, search) => {
    let mainData = foods;
    if (search) {
      mainData = foodItem;
    }
    if (selected) {
      mainData = mainData.filter(
        item => item?.category.toLowerCase() === selected.toLowerCase()
      );
    }
    const { startIndex, endIndex } = calculatePageRange();
    const currentItem = mainData?.slice(startIndex, endIndex);
    return currentItem.map((item, i) => <Card key={i} item={item} />);
  };

  const result = mainFunction(foods, category, search);

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
                      className="absolute bottom-[15px] lg:w-[120px] w-[105px] lg:left-[74%] left-[66%] text-white right-0 bg-primary px-1 py-[6px] rounded-full"
                    />
                  </div>
                </form>
              </div>
              <div className="lg:w-1/2 w-full">
                <ul className="flex flex-wrap space-x-3">
                  <button
                    onClick={handleClick}
                    value=""
                    className="px-3 py-[6px] bg-primary text-white cursor-pointer lg:mb-0 mb-2 rounded"
                  >
                    All
                  </button>
                  <button
                    onClick={handleClick}
                    value="Burger"
                    className="px-3 py-[6px] bg-primary text-white cursor-pointer lg:mb-0 mb-2 rounded"
                  >
                    Burger
                  </button>
                  <button
                    onClick={handleClick}
                    value="Pizza"
                    className="px-3 py-[6px] bg-primary text-white cursor-pointer lg:mb-0 mb-2 rounded"
                  >
                    Pizza
                  </button>
                  <button
                    onClick={handleClick}
                    value="Chicken"
                    className="px-3 py-[6px] bg-primary text-white cursor-pointer lg:mb-0 mb-2 rounded"
                  >
                    Chicken
                  </button>
                  <button
                    onClick={handleClick}
                    value="Desert"
                    className="px-3 py-[6px] bg-primary text-white cursor-pointer lg:mb-0 mb-2 rounded"
                  >
                    Desert
                  </button>
                  <button
                    onClick={handleClick}
                    value="Drinks"
                    className="px-3 py-[6px] bg-primary text-white cursor-pointer lg:mb-0 mb-2 rounded"
                  >
                    Soft Drinks
                  </button>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {result}
          </div>
          <div className="py-10">
            <div>
              {result.length > 0 ? (
                <>
                  <div>
                    <button
                      onClick={previousPage}
                      className="text-[16px] font-medium text-secondary"
                    >
                      Previous
                    </button>
                    <span className="px-3">Page {currentPage}</span>
                    <button
                      onClick={nextPage}
                      className="text-[16px] font-medium text-secondary"
                    >
                      Next
                    </button>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Menu;
