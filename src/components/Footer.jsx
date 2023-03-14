import React from 'react'

function Footer(props) {
  return (
    <div>
        <div className='flex flex-row items-center justify-center py-3 px-6 space-x-6 bg-black mt-2 rounded-md' >

            <h1 className='text-white text-sm font-medium hover:text-yellow-500 cursor-pointer'>Home</h1>
            <h1 className='text-white text-sm font-medium hover:text-yellow-500 cursor-pointer'>Create Card</h1>
            <h1 className='text-white text-sm font-medium hover:text-yellow-500 cursor-pointer'>Balance</h1>
            <h1 className='text-white text-sm font-medium hover:text-yellow-500 cursor-pointer'>Support</h1>
            <h1 className='text-white text-sm font-medium hover:text-yellow-500 cursor-pointer'>{props.year}  </h1>  

        </div>
    </div>
  )
}

export default Footer