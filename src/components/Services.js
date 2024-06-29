import React from 'react'

function Services() {
  return (
    <div className=' flex justify-center my-20  space-x-4'>
        <div className='flex flex-col items-center cursor-pointer hover:shadow-md '>
            <img className=' h-40 w-60' src='/images/business.png'/>
            <div>BUSINESS</div>
        </div>
        <div className='flex flex-col items-center cursor-pointer hover:shadow-md '>
            <img className=' h-40 w-60' src='/images/personnel.png'/>
            <div>PERSONNEL</div>
        </div>
        <div className='flex flex-col items-center cursor-pointer hover:shadow-md '>
            <img className=' h-40 w-60' src='/images/finance.png'/>
            <div>Finance</div>
        </div>
        <div className='flex flex-col items-center cursor-pointer hover:shadow-md '>
            <img className=' h-40 w-60' src='/images/viglogo.png'/>
            <div>VIGILENCE</div>
        </div>
        <div className='flex flex-col items-center cursor-pointer hover:shadow-md '>
            <img className=' h-40 w-60' src='/images/project.png'/>
            <div>PROJECT</div>
        </div>
     
    </div>
  )
}

export default Services