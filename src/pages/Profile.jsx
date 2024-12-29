import React from 'react'
import Sidebar from '../components/Profile/sidebar';
import { Outlet } from "react-router-dom"
import { useEffect } from 'react';
import {useSelector } from "react-redux";
import axios from "axios";
import Loader from "../components/loader/loader"
import { useState } from 'react';
import Mobilenav from '../components/Profile/Mobilenav';

function Profile() {

  //const isLoggedIn=useSelector();

  const [Profile, SetProfile]=useState();

  const headers= {

    id:localStorage.getItem("id"),
    authorization:`Bearer ${localStorage.getItem("token")}`,
  }


  useEffect(()=>{
      
    const fetch=async ()=>{
      
      const response=await axios.get("https://bookhaven-gx84.onrender.com/api/v1/get-user-information",{headers});

     SetProfile(response.data);

    }

     fetch();
  },[])

  return (
    <div className='bg-zinc-900 px-2 md:px-12 flex flex-col md:flex-row md:h-screen py-8'>
     
     {!Profile && <div className='w-full h-[100%] flex items-center justify-center'><Loader/></div>}
     {Profile&& <> <div className=' w-full md:w-1/6'>
      <Sidebar data={Profile}></Sidebar>
      <Mobilenav/>
      </div>
      <div className='w-full md:w-5/6'>
   <Outlet/> 

      </div>
     </>}


      
    </div>
  )
}

export default Profile;
