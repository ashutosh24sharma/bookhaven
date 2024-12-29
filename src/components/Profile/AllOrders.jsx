
import React, { useEffect,useState } from 'react'
import axios from "axios";
import Loader from '../loader/loader';

function AllOrders() {


const [Allorders,setAllorders]=useState();

  const headers= {

    id:localStorage.getItem("id"),
  
    authorization:`Bearer ${localStorage.getItem("token")}`,
  
    
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        `https://bookhaven-gx84.onrender.com/api/v1/get-all-orders`,{headers}
      );

      setAllorders(response.data.data);
    };
    fetch();
  }, []);
  return (
    <>
     {!Allorders && <div className="h-screen bg-zinc-900 flex items-center justify-center">
          {" "}
          <Loader />{" "}
        </div>}

        
   {Allorders && Allorders.length > 0 && (<div className='h-[100%] p-0 md:p-4 text-zinc-100'>
     
     <h1 className='text-5xl font-semibold text-zinc-400 md:text-7xl mb-8'>Your Order History</h1>

     <div className='mt-4 bg-zinc-800 w-full rounded py-2 px-4 flex gap-2'>

           <div className='w-[3%]'>
            <h1 className='md:text-center text-xl'>Sr.</h1>
           </div>
           <div className='w-[22%]'>
            <h1 className='text-xl ml-2'>Books</h1>
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
     </div>)}
    </>
  )
}

export default AllOrders;
