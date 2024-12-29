import React, { useEffect, useState } from 'react'
import axios from "axios"
import Bookcart from '../bookCard/Bookcart';
import Loader from '../loader/loader';

function Recently() {
 const [Data,setData]= useState();

 useEffect(()=>{

        const fetch=async ()=>{
      const response=  await axios.get("https://bookhaven-gx84.onrender.com/api/v1/recent-all-book")
         
       setData(response.data.data);
         }
         fetch();
},[]);

  

  return (
    
    <div className='mt-8 px-8'>

        <h1 className='text-2xl font-bold text-green-300 md:text-7xl md:m-15 mt-8'>Recently Added Books</h1>
         
            {!Data && <div className='flex items-center justify-center my-9'><Loader/>{" "}</div>}
         <div className="my-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
          
          {Data && Data.map((items,i)=> <div key={i}> <Bookcart data={items} /> {" "} </div>)}
         </div>
      
    </div>
  )
}

export default Recently;
