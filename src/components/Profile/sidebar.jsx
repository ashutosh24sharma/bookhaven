import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import {useDispatch, useSelector} from "react-redux"
import { authActions } from '../../Store/auth';

function Sidebar({data}) {
  
  const dispatch=useDispatch();
  const history=useNavigate();
  const role= useSelector((state)=>state.auth.role);
  return (
    <div className='bg-zinc-800 rounded p-3 flex flex-col justify-between h-[90%] items-center m-3'>
   
        <div className='flex flex-col items-center justify-center'>
          <img src={data.avatar} alt="&" className='h-[10vh] rounded-full' />
        <p className='mt-2 text-2xl text-green-400 '>{data.username}</p>
        <p className='mt-2 text-xl text-blue-300'>{data.email}</p>
        <div className='w-full mt-3 h-[1px] bg-zinc-500 hidden lg:block'>

        </div>
</div>
       {role==="user" &&  <div className='w-full flex-col items-center justify-center hidden lg:flex'>

<Link to="/profile/Favourites" className='text-zinc-100 text-3xl mt-4 no-underline font-semibold w-full py-2 text-center 
rounded hover:bg-zinc-900 transition-all duration-300'>Favorites</Link>

<Link to="/profile/orderhistory" className='text-zinc-100 mt-4 text-3xl no-underline font-semibold w-full py-2 text-center 
rounded hover:bg-zinc-900 transition-all duration-300'> Order History </Link>

<Link to="/profile/settings" className='text-zinc-100 mt-4 text-3xl no-underline font-semibold w-full py-2 text-center 
rounded hover:bg-zinc-900 transition-all duration-300'> Settings </Link>
</div>}
{role==="admin" &&  <div className='w-full flex-col items-center justify-center hidden lg:flex'>

<Link to="/profile/allorders" className='text-zinc-100 text-3xl mt-4 no-underline font-semibold w-full py-2 text-center 
rounded hover:bg-zinc-900 transition-all duration-300'>All Orders</Link>

<Link to="/profile/addbooks" className='text-zinc-100 mt-4 text-3xl no-underline font-semibold w-full py-2 text-center 
rounded hover:bg-zinc-900 transition-all duration-300'>Add Books</Link>


</div>}
        <button className='bg-zinc-900 w-3/6 lg:w-full mt-4 lg:mt-0 text-red-500 font-semibold flex items-center justify-center py-3 text-2xl rounded hover:text-red-300 transition-all duration-300 '
        onClick={()=>{
          dispatch(authActions.logout());
          dispatch(authActions.ChangeRole("user"));
          localStorage.clear("id")
          localStorage.clear("token")
          localStorage.clear("role");
          history("/")

        }}
        
        >
        
        Log Out <FaArrowRightFromBracket className="ms-4" />
        </button>

    </div>
  )
}

export default Sidebar
                   