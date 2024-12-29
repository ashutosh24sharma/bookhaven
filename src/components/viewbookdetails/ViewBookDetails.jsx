import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../loader/loader";
import { GrLanguage } from "react-icons/gr";
import { FaCartArrowDown } from "react-icons/fa";
import { BsFillChatHeartFill } from "react-icons/bs";
import {useSelector} from "react-redux";
import { FaEdit } from "react-icons/fa";
import { MdDelete, MdOutlineFormatTextdirectionLToR } from "react-icons/md";

import { Link, useNavigate, useParams } from "react-router-dom";



function ViewBookDetails() {

  

  
const navigate=useNavigate();
  const { id } = useParams();

  
  

  const [Data, setData] = useState();

  const isLoggedIn=useSelector((state)=> state.auth.isLoggedIn);
  const role=useSelector((state)=> state.auth.role);
  
  


  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        `https://bookhaven-gx84.onrender.com/api/v1/get-book-by-id${id}`
      );

      setData(response.data.data);
    };
    fetch();
  }, []);

  const headers= {

    id:localStorage.getItem("id"),
  
    authorization:`Bearer ${localStorage.getItem("token")}`,
    bookid:id,
  }
  

  const handleFavourite=async ()=>{

    try {
      

      const response= await axios.put("https://bookhaven-gx84.onrender.com/api/v1/add-book-in-favi",{},{headers});

      alert(response.data.message);

    } catch (error) {
      alert("internal server error");
    }


  }

   const addToCart=async ()=>{

    try {
      

      const response= await axios.put("https://bookhaven-gx84.onrender.com/api/v1/add-to-cart",{},{headers});

      alert(response.data.message);

    } catch (error) {
      alert("internal server error");
    }


   }

   const deletebook=async ()=>{
    const response= await axios.delete("https://bookhaven-gx84.onrender.com/api/v1/delete-book",{headers});

      alert(response.data.message);
      navigate("/all-books")
   }

  

  return (
    <>
      {Data && (
        <div className="md:px-12 px-8 py-8 bg-zinc-900 flex md:flex-row flex-col  gap-8">
          <div className="h-full  md:h-[88vh] lg:w-3/6 ">
            {" "}
            <div className="flex md:py-12 md:px-25 py-3 px-4  justify-around md:h-[70vh] bg-zinc-800 rounded">
              <img
                src={Data.url}
                alt="/"
                className=" h-[50vh] rounded items-center"
              />

               { isLoggedIn===true && role==="user" && <div className="flex flex-col  gap-3  ">
                <button className="hover:bg-red-400 bg-pink-300 text-red-600 rounded-full text-3xl  md:text-5xl  md:p-2" onClick={handleFavourite}>
                  <BsFillChatHeartFill />
                </button>
                <button className="bg-blue-200 hover:bg-sky-400 rounded-full text-blue-800 text-3xl md:text-5xl  md:p-2 md:mt-4" onClick={addToCart}>
                  <FaCartArrowDown />
                </button>
              </div> } 
              { isLoggedIn===true &&  role==="admin" && <div className="flex flex-col  gap-3  ">
                <Link  to={`/updatebook/${id}`} className="bg-blue-200 hover:bg-sky-40 rounded-full  text-blue-800 text-3xl md:text-5xl md:p-2 p-1" >
                  <FaEdit /> 
              </Link>
                <button className="hover:bg-red-400 bg-pink-300  text-red-600 rounded-full text-3xl md:text-5xl md:p-2 p-1 md:mt-4" onClick={deletebook}>
                <MdDelete />
                </button>
              </div> } 
            </div>
          </div>
          <div className="p-4 md:w-3/6 ">
            <h1 className="md:text-6xl text-3xl text-zinc-300 m-3 md:mt-0 font-bold">
              {Data.title}
            </h1>
            <p className="text-zinc-400 md:text-2xl">by {Data.author}</p>

            <p className="text-zinc-500 mt-1 md:text-xl md:line-clamp-none line-clamp-6">
              {Data.desc}...
            </p>
            <p className="text-zinc-400 mt-1 flex items-center text-xl ">
              <GrLanguage className="me-2" /> {Data.language}
            </p>
            <h2 className="mt-2 md:text-4xl text-2xl font-bold text-zinc-200 ">
              ₹ {Data.price}
            </h2>
          </div>
        </div>
      )}
      {!Data && (
        <div className="h-screen bg-zinc-900 flex items-center justify-center">
          {" "}
          <Loader />{" "}
        </div>
      )}
    </>
  );
}

export default ViewBookDetails;
