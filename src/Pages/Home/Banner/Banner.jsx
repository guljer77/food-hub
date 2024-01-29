import React, { useEffect, useState } from "react";
import "./banner.css";
import Container from "../../../Components/Container";
import { Link } from "react-router-dom";

function Banner({ search, searchResult, foodItem }) {
  // const [item, setItem] = useState([]);
  // useEffect(() => {
  //   const finalItem = foodItem.map(item => {
  //     return item;
  //   });
  //   setItem(finalItem);
  // }, [foodItem]);

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
        {search && foodItem && (
          <div className="absolute z-50 bg-gray-200 p-3 lg:w-[350px] w-[300px] h-auto scroll-my lg:top-[400px] top-[470px] rounded-md lg:left-[80px]">
            {search &&
              foodItem.map((item, i) => (
                <Link to={`/details/${item?._id}`} key={i} className="bg-white mb-1 p-3 block">
                  <div className="flex items-center justify-between gap-3">
                    <div className="w-1/4">
                      <img src={item?.image} alt="" />
                    </div>
                    <div className="w-3/4">
                      <h6 className="text-[20px] text-secondary">{item?.name}</h6>
                      <p className="text-[16px] font-bold text-primary">$ {item?.regularPrice}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        )}
      </Container>
    </div>
  );
}

export default Banner;
