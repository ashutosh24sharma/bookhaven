import React from 'react'
import { Link } from "react-router-dom";
import axios from "axios";

function Bookcart({data,favourites}) {

  const headers= {

    id:localStorage.getItem("id"),
  
    authorization:`Bearer ${localStorage.getItem("token")}`,
    bookid:data._id,
  }

const handleRemoveBook=async ()=>{

  try {
      

    const response= await axios.put("https://bookhaven-gx84.onrender.com/api/v1/remove-book-from-favi",{},{headers});

   

  } catch (error) {
    alert("Please try again letter");
  }

}
  
  return (
  
      <div className='bg-zinc-700 rounded p-4 flex flex-col'>
   <Link className='no-underline' to={`/view-book-details/${data._id}`} >
      
      <div >
          <div className="flex bg-zinc-900 rounded items-center justify-center">
            <img src={data.url} alt="/" className='h-[15vh]'/>
          </div>
          <h2 className='mt-4 text-4xl font-bold text-white  '>{data.title}</h2>
          <h2 className='mt-3 text-xl text-zinc-400  '>{data.author}</h2>
          <h2 className='mt-3 text-3xl font-bold text-zinc-200 '>₹ {data.price}</h2>
          
      </div>
  </Link>

  {favourites && (<button className='bg-yellow-100 md:text-4xl text-2xl font-semibold p-1  md:px-4 mt-2 md:py-2 rounded border-yellow-500 text-red-400 hover:bg-pink-300' onClick={handleRemoveBook}> Remove </button>)}
  </div>

 
  
  )
}

export default Bookcart;
