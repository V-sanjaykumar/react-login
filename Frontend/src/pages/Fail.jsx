import React from 'react'

const Fail = () => {
  return (
        <div className='image_container' style={{
      backgroundImage:"url('/bgimage.jpg')" ,backgroundSize:'cover',backgroundPosition:'center',minHeight:'100vh',minWidth:'100wh',display:'flex',justifyContent:'center',alignItems:'center'}}>
          <div className='text-3xl text-red-400 bg-black bg-opacity-50'>Login Failed!!!!</div>
      </div>
    
  )
}

export default Fail