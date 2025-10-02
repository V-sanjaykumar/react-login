import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



function App() {
  const navigate=useNavigate()
  const[user,setuser]=useState("")
  const[pass,setpass]=useState("")


  function handleuser(event)
  {
    setuser(event.target.value)
  }
  function handlepass(event)
  {
    setpass(event.target.value)
  }
function check(){
  var logindetails=axios.get(`http://localhost:3000/login?username=${user}&password=${pass}`)
  logindetails.then(function(data){
    if(data.data === true)
    {
      navigate("/success")
    }
    else{
      navigate("/fail")
    }
  })
}

  return (
    <div className='image_container' style={{
      backgroundImage:"url('/bgimage.jpg')" ,backgroundSize:'cover',backgroundPosition:'center',minHeight:'100vh',minWidth:'100wh',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <div className='container flex justify-center items-center mt-40' >
        <div className='justify-center shadow-xl mx-auto p-10' >
          <h1 className='text-center font-bold text-2xl'> LOGIN DETAILS </h1>
          <input className="rounded-lg mt-5 border hover:border-blue-900 shadow-md p-2" onChange={handleuser} name='username' placeholder='username'></input>
          <br></br>
          <input className='rounded-lg mt-5 border hover:border-blue-900 shadow-md p-2' onChange={handlepass} name='password' placeholder='password'></input>
          <br></br>
            <div className='items-center  text-center mt-5 bg-yellow-500 text-white border  border-blue-600 p-2 rounded-lg'>
              <button  onClick={check}>Login</button>
            </div>

        </div>
      </div>
    </div>
  )

}

export default App
