import React, { useEffect, useState } from 'react'
import axios from "axios";
import Loader from "../loader/loader";
import { Link } from 'react-router-dom';

function Orderhistory() {

  const [orderhistory,setorderhistory]=useState();
  const headers= {

    id:localStorage.getItem("id"),
  
    authorization:`Bearer ${localStorage.getItem("token")}`,
    
  }

  useEffect(()=>{

    const fetch=async ()=>{
      const response=await axios.get("https://bookhaven-gx84.onrender.com/api/v1/get-order-history",{headers});


    
      setorderhistory(response.data.data)
      
    };
    
    fetch();
    
     },[]
    )


  return (
  <>
    
   {!orderhistory && <div className="h-screen bg-zinc-900 flex items-center justify-center">
          {" "}
          <Loader />{" "}
        </div>}
   { orderhistory && orderhistory.length === 0 && (<div className='h-screen'>
    <h1 className='text-5xl font-semibold text-zinc-400 md:text-7xl mb-8'>Your History</h1>
    <div className='items-center justify-center flex  flex-col h-[100%]'>
    <h1 className='md:text-8xl text-3xl font-bold text-zinc-500  mb-2'>Not Any History Available</h1>
      <img src="../nohistory.jpg" alt="/" className='h-[30vh] rounded md:mb-20 opacity-5' />
     
    
     </div>

   </div>)}

   {orderhistory && orderhistory.length > 0 && (<div className='h-[100%] p-0 md:p-4 text-zinc-100'>
     
     <h1 className='text-5xl font-semibold text-zinc-400 md:text-7xl mb-8'>Your Order History</h1>

     <div className='mt-4 bg-zinc-800 w-full rounded py-2 px-4 flex gap-2'>

           <div className='w-[3%]'>
            <h1 className='md:text-center text-xl'>Sr.</h1>
           </div>
           <div className='w-[22%]'>
            <h1 className='text-xl ml-2'>Title</h1>
           </div>
           <div className='w-[45%]'>
            <h1 className='text-xl'>Description</h1>
           </div>
           <div className='w-[9%]'>
            <h1 className='text-xl'>Price</h1>
           </div>
           <div className='w-[16%]'>
            <h1 className='md:block hidden text-xl'>Status</h1>
           </div>
           <div className='w-none md:w-[5%] hidden md:block'>
            <h1 className='text-xl'>Mode</h1>
           </div>



     </div>


    {orderhistory.map((items,i)=>(

      <div className='bg-zinc-800 w-full rounded py-2 px-4 flex gap-4 hover:bg-zinc-900 hover:cursor-pointer 'key={i}>
 
<div className='w-[3%]'>
            <h1 className='text-center'>{i+1}</h1>
           </div>
           <div className='w-[22%]'>
            <h1 className='hover:text-blue-300'>title</h1>
           </div>
           <div className='w-[45%]'>
            <h1 className='text-white'>description</h1>
           </div>
           <div className='w-[9%]'>
            <h1 className=''>price</h1>
           </div>
           <div className='w-[16%]'>
            <h1 className='font-semibold md:block hidden text-green-500'>

              {items.status==="Oreder placed" ? <div className='text-yellow-500'>status</div>:
              
              items.status==="Canceled" ? <div className='text-red-500'>status</div>:items.status
              }
            </h1>
           </div>
           <div className='w-none md:w-[5%] hidden md:block'>
            <h1 className='  text-zinc-400'>COD</h1>
           </div>


      </div>
    )

    )}
      </div>
    
    
    
    )}

</> )
}

export default Orderhistory
