import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function Ratings({stars}) {
  const ratingStar = Array.from({length: 5}, (elem, index)=>{
    let number = index + 0.5;

    return (<span key={index}>
      {
        stars >= index + 1 ? (<FaStar className='text-yellow-500' />): stars >= number ? (<FaStarHalfAlt className='text-yellow-500' />):(<FaRegStar className='text-yellow-500' />) 
      }
    </span>)
  })
  return (
    <div className='flex items-center'>
      {ratingStar}
    </div>
  )
}

export default Ratings