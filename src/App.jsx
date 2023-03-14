import React from 'react'
import Body from './components/Body'
import Footer from './components/Footer'
import Header from './components/Header'




// export default Lucas;

export default function App() {
  return (
    <div className='bg-yellow-400 flex flex-col items-center justify-center h-screen'>
      {/* <h1 className='text-2xl font-semibold'>Welcome to Baloncard Services</h1> */}

      <Header name="Linda" />
      <Body balance="$500,000" day="Sunday" time="11:00 PM" />
      <Footer year="2023" />
    </div>
    
  )
}
