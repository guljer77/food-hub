import React from 'react';
import './app.css';
import { FaGooglePlay, FaApple } from "react-icons/fa";

function Apps() {
  return (
    <div className='bg-apps'>
      <div className='flex items-center justify-center w-full h-auto'>
        <div className='py-20 text-center lg:px-0 px-6'>
          <h6 className='text-[28px] text-primary italic font-semibold'>$5.00 Cashback</h6>
          <h3 className='text-[42px] text-white font-extrabold'>Easy To Order Our All Food</h3>
          <div className='lg:flex items-center gap-3 justify-center text-white pt-5'>
            <div className='flex items-center gap-2 bg-primary p-2 rounded lg:mb-0 mb-3'>
              <span className='text-[32px]'><FaGooglePlay /></span>
              <div>
                <h4 className='text-[16px] font-medium'>Available On The</h4>
                <h3 className='text-18px font-semibold'>Google Play</h3>
              </div>
            </div>
            <div className='flex items-center gap-2 bg-primary p-2 rounded'>
              <span className='text-[32px]'><FaApple /></span>
              <div>
                <h4 className='text-[16px] font-medium'>Download On The</h4>
                <h3 className='text-18px font-semibold'>App Store</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Apps