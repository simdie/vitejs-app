import React from 'react'

function Header(props) {
  return (
    <div className='flex flex-row items-center space-x-3 '>
        <h1 className='bg-purple-700 rounded-lg px-5 py-2 text-white'> {props.name}</h1>
        <h1>Welcome to Baloncard services</h1>
    </div>
  )
}

export default Header