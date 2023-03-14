import React from 'react'
import Pic from '/section7-left.png'

// function Logo (props) {
//     const userLogo = <img src={Pic} />
//     return userLogo;
// }






function Body(props) {
    // const url ="https://cdn.filestackcontent.com/resize=width:1100/output=format:webp/mwD8KbckQ9ybvyaDOsmQ"

    // const result = <img src={url} alt="" />

    const userLogo = <img src={Pic} />
    const userlogo2 = userLogo
  return (
    <div>
        Your Balance as at <span className='underline font-semibold '>   {props.time}  </span> <span className='underline font-semibold decoration-wavy'>   {props.day}  </span> is <span className='bg-black p-2 rounded-lg text-white'>{props.balance}</span> 
        {/* <div className='h-40 w-40 border rounded-lg'>{result}</div> */}

        {/* <Logo /> */}
        {userlogo2}
        
        
    </div>
  )
}

export default Body