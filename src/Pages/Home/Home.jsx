import React, { useState } from 'react'
import Banner from './Banner/Banner'
import DailyOffer from './Offer/DailyOffer'
import ChefsSection from './ChefsSection/ChefsSection'
import BlogSection from './BlogSection/BlogSection'
import Reservation from './BookTable/Reservation'
import PopularFoods from './PopularFoods/PopularFoods'
import Apps from './Apps/Apps'
import { useMenu } from '../../Hooks/useMenu'
import Card from '../../Components/Food/Card'

function Home() {
  const [foods] = useMenu();
  const [search, setSearch] = useState("");
  const [foodItem, setFoodItem] = useState([]);
  const [category, setCategory] = useState(null);
  //search
  const searchResult = (event) =>{
    const searchFilter = event.target.value;
    setSearch(searchFilter);
    const filterData = foods.filter((item)=> item?.name.toLowerCase().includes(searchFilter.toLowerCase()));
    setFoodItem(filterData);
  }
  //button-click
  const handleClick = (event) =>{
    setCategory(event.target.value);
  }
  //main-function
  const mainFunction = (foods, selected) =>{
    let mainData = foods;
    if(selected){
      mainData = mainData.filter((item)=> item?.category.toLowerCase() === selected.toLowerCase() )
    }
    return mainData.map((item, i)=><Card key={i} item={item} />)
  }

  const result = mainFunction(foods, category);

  return (
    <div>
      <Banner foodItem={foodItem} search={search} searchResult={searchResult} />
      <DailyOffer />
      <Reservation />
      <PopularFoods handleClick={handleClick} result={result} />
      <ChefsSection />
      <Apps />
      <BlogSection />
    </div>
  )
}

export default Home