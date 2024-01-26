import React from 'react'
import CoverBanner from '../../Components/CoverBanner/CoverBanner'
import Container from '../../Components/Container';
import Man from '../../assets/testimonial_img_3.jpg';
import { FaUser, FaShoppingBag, FaStar,  } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";

function Profile() {
  return (
    <div>
      <CoverBanner heading={"User Dashboard"} subHeading={"Dashboard"} />
      <Container>
        <div className='py-20'>
          <div className='lg:flex items-start justify-between'>
            <div className='lg:w-1/4 w-full lg:mb-0 mb-5 border border-primary bg-primary text-white rounded-s-md'>
              <div className='py-10'>
                <img src={Man} alt="" className='w-[140px] h-[140px] rounded-full mx-auto p-1 bg-white' />
                <h4 className='text-[20px] font-bold py-2 text-center'>Hasib</h4>
              </div>
              <div className=''>
                <ul>
                  <li className='pl-5 border-y border-gray-100 flex items-center gap-3 py-3 text-[17px] font-semibold'><FaUser />Personal Info</li>
                  <li className='pl-5 py-3 text-[17px] font-semibold border-b border-gray-100 flex items-center gap-3'><FaShoppingBag />Order</li>
                  <li className='pl-5 py-3 text-[17px] font-semibold border-b border-gray-100 flex items-center gap-3'><FaStar />  Reviews</li>
                  <li className='pl-5 py-3 text-[17px] font-semibold flex items-center gap-3'><LuLogOut /> Logout</li>
                </ul>
              </div>
            </div>
            <div className='lg:w-3/4 w-full border border-primary h-[468px] bg-bg-primary rounded-e-md'></div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Profile