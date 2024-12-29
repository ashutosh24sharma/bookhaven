import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector} from "react-redux"


function Mobilenav() {
  const role= useSelector((state)=>state.auth.role);
  return (
   <>
    {role==="user" &&  <div className='w-full flex items-center justify-between md:hidden my-4'>
       

<Link to="/profile/Favourites" className='text-zinc-100 md:text-3xl mt-4 no-underline font-semibold w-full py-2 text-center 
rounded hover:bg-zinc-900 transition-all duration-300'>Favorites</Link>

<Link to="/profile/orderhistory" className='text-zinc-100 mt-4 md:text-3xl no-underline font-semibold w-full py-2 text-center 
rounded hover:bg-zinc-900 transition-all duration-300'> Order History </Link>

<Link to="/profile/settings" className='text-zinc-100 mt-4 md:text-3xl no-underline font-semibold w-full py-2 text-center 
rounded hover:bg-zinc-900 transition-all duration-300'> Settings </Link>
</div>
}

{role==="admin" && 
  
  <div className='w-full flex items-center justify-between md:hidden my-4'>
 

<Link to="/profile/allorders" className='text-zinc-100 md:3xl mt-4 no-underline font-semibold w-full py-2 text-center 
rounded hover:bg-zinc-900 transition-all duration-300'>All Orders</Link>

<Link to="/profile/addbooks" className='text-zinc-100 mt-4 md:text-3xl no-underline font-semibold w-full py-2 text-center 
rounded hover:bg-zinc-900 transition-all duration-300'>Add Books</Link>

</div>}
</> )
  
  
}

export default Mobilenav
