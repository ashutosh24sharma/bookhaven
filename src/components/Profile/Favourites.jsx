import React, { useEffect, useState } from 'react'
import axios from "axios";
import Bookcart from '../bookCard/Bookcart';

function Favourites() {

  const [favouritesBook,setfavouritesBook]=useState()


  const headers= {

    id:localStorage.getItem("id"),
  
    authorization:`Bearer ${localStorage.getItem("token")}`,
    
  }

 useEffect(()=>{

const fetch=async ()=>{
  const response=await axios.get("https://bookhaven-gx84.onrender.com/api/v1/get-favi-book",{headers});

  setfavouritesBook(response.data.data)
};

fetch();

 },[favouritesBook]
)


  return (
    <>
     <h1 className='text-5xl font-semibold text-zinc-400 md:text-7xl mb-8'>Favorites Books</h1>
     { favouritesBook && favouritesBook.length === 0 && <div className='items-center flex justify-center flex-col h-[100%]'>
      
      <img src="../nofav.png" alt="/" className='h-[35vh] rounded' />
     
     <h1 className='md:text-8xl text-3xl font-bold text-zinc-500'>No Items In Favorites</h1>
     </div>}

     <div className='grid md:grid-cols-4 gap-4 px-4 md:px-0'>

     

{favouritesBook && favouritesBook.map((item,i)=>(<div key={i}>

<Bookcart data={item} favourites={true}/>

</div>))}

</div>
    </>
  
  )
}

export default Favourites;
