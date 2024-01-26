import React from 'react'

function SectionTitle({heading, subHeading}) {
  return (
    <div className='pb-10'>
      <h4 className='text-[22px] italic text-primary font-semibold'>{subHeading}</h4>
      <h3 className='text-[36px] font-bold text-secondary'>{heading}</h3>
    </div>
  )
}

export default SectionTitle