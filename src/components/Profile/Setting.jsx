import React, { useEffect, useState } from 'react'
import axios from "axios";
import Loader from "../loader/loader";
import { Link } from 'react-router-dom';

function Setting() {
  const [Value,setValue]=useState({adress:""});
  const [ProfileData,setProfileData]=useState();

  const headers= {

    id:localStorage.getItem("id"),
  
    authorization:`Bearer ${localStorage.getItem("token")}`,
    
  }

  const change=(e)=>{
    const {name,value}=e.target;
    setValue({...Value,[name]:value})
  }

try {
  
  useEffect(()=>{

    const fetch=async ()=>{
      const response=await axios.get("https://bookhaven-gx84.onrender.com/api/v1/get-user-information",{headers});


    
      setProfileData(response.data)
      setValue({adress:response.data.adress});
    };
    
    fetch();
    
     },[]
    )
} catch (error) {
  alert("some error occurs")
}

const addressSubmit=async ()=>{
  
  try {
    const response=await axios.put("https://bookhaven-gx84.onrender.com/api/v1/update-adress",Value,{headers});
  
  
      
       alert(response.data.message);
    
  } catch (error) {
    alert("some error occurs")
  }
  
    
  

        
      
      
  
      
    }
  
  return (
   <>
    {!ProfileData && <div className="h-screen bg-zinc-900 flex items-center justify-center">
          {" "}
          <Loader />{" "}
        </div>}
        {ProfileData &&  (<div className='h-[100%] p-0 md:p-4 text-zinc-100'>
     
     <h1 className='text-5xl font-semibold text-zinc-400 md:text-7xl mb-8'>Settings</h1>

     <div className="flex gap-12">
      <div className=''>
        <label htmlFor='' className='md:text-4xl'>Username</label>
        <p className='p-2 rounded text-green-300 bg-zinc-800 mt-2 md:text-3xl font-semibold'>
          {ProfileData.username}
        </p>
      </div>
      <div className=''>
        <label htmlFor='' className='md:text-4xl'>Email</label>
        <p className='p-2 rounded text-blue-300 bg-zinc-800 mt-2 md:text-3xl font-semibold'>
          {ProfileData.email}
        </p>
      </div>
     </div>
      <div className="flex mt-4 flex-col">
        <label htmlFor='' className='md:text-4xl'>Address</label>
        <textarea className='p-2 rounded bg-zinc-800 mt-2 font-semibold' rows="5" placeholder='Address' name='adress' value={Value.adress} onChange={change}/>


        
      </div>
<div className='mt-4 justify-end flex'>
  <button className='bg-yellow-500 text-zinc-900 font-semibold px-3 py-2 rounded hover:bg-yellow-400' onClick={addressSubmit}>Update</button>
</div>


     </div>)}

   </>
  )
}

export default Setting
