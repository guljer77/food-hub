import React from 'react'
import { useAuth } from '../../../Hooks/useAuth'

function UserHome() {
  const {user} = useAuth();
  return (
    <div>
      <h4 className='text-[26px] font-semibold text-secondary pb-3'>Personal Information</h4>
      <div className='bg-white p-5 rounded-md'>
        <h6 className='text-[18px] py-3'><span className='font-bold'>Name:</span> {user?.displayName}</h6>
        <hr />
        <h6 className='text-[18px] py-3'><span className='font-bold'>Email:</span> {user?.email}</h6>
      </div>
    </div>
  )
}

export default UserHome