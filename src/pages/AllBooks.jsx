
import React, { useEffect, useState } from 'react'
import axios from "axios"
import Bookcart from '../components/bookCard/Bookcart';
import Loader from '../components/loader/loader';

 

function AllBooks() {

  const [Data,setData]= useState();

  useEffect(()=>{
 
         const fetch=async ()=>{
       const response=  await axios.get("https://bookhaven-gx84.onrender.com/api/v1/get-all-book")
          
        setData(response.data.data);
          }
          fetch();
 },[]);

  return (
    
         <div className=' bg-zinc-900 md:h-screen px-12 py-8'>{" "}

<h1 className='text-2xl font-bold text-green-300 md:text-7xl md:m-15 mt-8'>All Books</h1>
 
    {!Data && <div className="h-screen bg-zinc-900 flex items-center justify-center">
          {" "}
          <Loader />{" "}
        </div>}
 <div className="my-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
  
  {Data && Data.map((items,i)=> <div key={i}> <Bookcart data={items} /> {" "} </div>)}
 </div>

</div>
    
  )
}

export default AllBooks;
