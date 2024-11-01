import React from 'react'
import customFont from "next/font/local"

const Discovercomponents = () => {
  
  return (
    <div className='discover-container bg-white'> 
      <div className="max-w-container mx-auto">
          <div className='discover-card-container px-[0] py-[34px] md:py-[64px]'>
                <div className='discover-header px-[20px] lg:px-[0] mb-[26px] md:mb-[32px]'>
                    <h2 className={`font-farroBold`}>Discover</h2>
                    <p className={`small mt-[8px]`}>Subheading</p>
                </div>
                <div className='discover-header px-[20px] lg:px-[0] mb-[26px] md:mb-[32px]'>
                    <h2 className={``}>Discover</h2>
                    <p className={`small mt-[8px]`}>Subheading</p>
                </div>
                <div className='discover-header px-[20px] lg:px-[0] mb-[26px] md:mb-[32px]'>
                    <h2 className={``}>Discover</h2>
                    <p className={`font-interBold small mt-[8px]`}>Subheading</p>
                </div>
            </div>
      </div>
    </div>
  )
}
export default Discovercomponents