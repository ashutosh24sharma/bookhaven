import React, { useEffect, useState } from 'react'
 import Loader from "../components/loader/loader";
 import { RiDeleteBin3Fill } from "react-icons/ri";
 import axios from "axios";

import {  useNavigate } from 'react-router-dom';
 
function Cart() {


  

  const navigate=useNavigate();
   const [cartBook,setCartBook]=useState()
   const [Totle,setTotle]=useState(0)
     
   const headers= {

    id:localStorage.getItem("id"),
  
    authorization:`Bearer ${localStorage.getItem("token")}`,
    
  }

  useEffect(()=>{

    const fetch=async ()=>{
      const response=await axios.get("https://bookhaven-gx84.onrender.com/api/v1/get-user-cart",{headers});
    
      setCartBook(response.data.data)
    };
    
    fetch();
    
     },[cartBook]
    )

     const deleteitem=async (bookid)=>{

      try {
        const response=await axios.put(`https://bookhaven-gx84.onrender.com/api/v1/remove-to-cart/${bookid}`,{},{headers});
    
      alert(response.data.message)

      } catch (error) {

        console.log(error)
        
      }

     }
     useEffect(()=>{

            if(cartBook && cartBook.length >0){
              let total=0;
              cartBook.map((items)=>{
                total +=items.price;
              });
              setTotle(total);
              total=0;
            }


     },[cartBook]);

     const placeOrder=async ()=>{

      try {
        const response=await axios.post(`https://bookhaven-gx84.onrender.com/api/v1/place-order`,{order:cartBook},{headers});
    
      alert(response.data.message);
      navigate("/profile/orderhistory");

      } catch (error) {

        console.log(error)
        
      }


     }

  return (
   <div className='md:h-screen bg-zinc-900 px-8 py-12'>
   {!cartBook && <div className="h-screen bg-zinc-900 flex items-center justify-center">
          {" "}
          <Loader />{" "}
        </div>}
   { cartBook && cartBook.length === 0 && (<div className='h-screen'>
    <h1 className='text-5xl font-semibold text-zinc-400 md:text-7xl mb-8'>Your Cart</h1>
    <div className='items-center flex justify-center flex-col h-[100%]'>
    <h1 className='md:text-8xl text-3xl font-bold text-zinc-500 md:mb-5 mb-2'>No Items In Cart</h1>
      <img src="../nocart.jpg" alt="/" className='h-[30vh] rounded md:mb-10' />
     
    
     </div>
   </div>)}
     
     {cartBook && cartBook.length >0 &&(<>
     
     <h1 className='text-5xl font-semibold text-zinc-400 md:text-7xl mb-8'>Your Cart</h1>
     {cartBook.map((item,i)=>(

      <div className='w-full my-4 rounded flex flex-col md:flex-row p-4 bg-zinc-600 justify-between items-center ' key={i}>

          <img src={item.url} alt="NO" className='h-[20vh] md:h-[10vh] object-cover'/>

          <div className='w-full md:w-auto flex flex-col justify-center items-center'>
            <h1 className='text-2xl md:text-4xl text-white font-semibold  text-start mt-2 md:mt-0'>{item.title}</h1>
            
        <p className='text-normal text-zinc-100 mt-2 hidden lg:block'>{item.desc.slice(0,100)}...</p>
        <p className='text-normal text-zinc-100 mt-2 hidden md:block lg:hidden'>{item.desc.slice(0,65)}...</p>
        <p className='text-normal text-zinc-100 mt-2 block md:hidden'>{item.desc.slice(0,100)}...</p>
          </div>

          <div className='flex mt-4 w-full md:w-auto items-center justify-between'>

         <h2 className='text-white text-3xl md:text-5xl font-semibold flex '>
          ₹ {item.price}
         </h2>
         <button className='bg-red-100 text-red-700 border border-red-700 rounded  p-2 text-3xl ms-12' onClick={()=>deleteitem(item._id)}>

         <RiDeleteBin3Fill />
         </button>

          </div>

      </div>
     ))}
     
     
     </>)}

     {cartBook && cartBook.length >0 && (

        <div className='mt-4 w-full flex itema-center justify-end'>

         <div className='p-4 bg-zinc-600 rounded'>

         <h1 className='text-3xl text-zinc-200 font-semibold'> Total Amount</h1>
         <div className='mt-3 flex items-center justify-between text-xl'>
          <h2 className='mr-3  text-blue-200'>{cartBook.length} books</h2>
          <h2  className='text-zinc-200'>₹{Totle}</h2>
         </div>
          <div className='w-[100%] mt-3'>

              <button className='bg-zinc-100 rounded px-4 py-2 flex justify-center text-zinc-900 w-full font-semibold hover:bg-yellow-100'onClick={placeOrder}>Place Your Order</button>

          </div>
         </div>

        </div>
        
     )}



   
   </div>
  )
}

export default Cart;
