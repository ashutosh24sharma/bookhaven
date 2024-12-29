 import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";

 
 
 function Navbar() {

  const links=[
    {
        title:"Home",
        link:"/"
    },
    {
        title:"About Us",
        link:"/about-us"
    },
    {
        title:"All Books",
        link:"/all-books"
    },
    {
        title:"Cart",
        link:"/cart"
    },
    {
        title:"Profile",
        link:"/profile"
    },
    {
        title:"Admin Profile",
        link:"/profile"
    },
  ];

   const isloggedIn= useSelector((state)=>state.auth.isLoggedIn);
   const role= useSelector((state)=>state.auth.role);

   if (isloggedIn === false){
     links.splice(3,3);
   }

   if (isloggedIn === true && role==="user"){
    links.splice(5,1);
  }

   if (isloggedIn === true && role==="admin"){
    links.splice(4,1);
  }

 const [mobile,setMobile]=useState("hidden");

    return ( 
        <>
        <nav className=" relative z-50 bg-zinc-800 text-white md:p-8  p-4 flex items-center  flex-row justify-between ">
            <Link to="/" className="logo flex gap-3 items-center no-underline">
                
                <img className="h-[75px] rounded-full" src="./download.jpeg" alt="" />
                <h1 className="font-bold text-green-600 text-2xl ">BooksHaven</h1>
                </Link>
                <div className="nav-links-books md:flex gap-4 items-center block" >
                    <div className="nav-links-book md:flex gap-6 hidden">
                    {
                    links.map((items,i)=> <Link  to={items.link} key={i} className="text-2xl text-white no-underline font-bold hover:text-blue-500 transition-all duration-300"> {items.title} </Link>

                    )
                   }
                    </div>

                 {isloggedIn===false && (<>
                 
                    <div className="md:flex gap-4 hidden">
                        <Link to="/sign-in" className="px-4 py-2 border text-yellow-50 no-underline border-blue-500 rounded text-2xl hover:bg-white hover:text-zinc-800 transition-all duration-300 ">Sign in</Link>
                        <Link to="/sign-up" className="px-4 py-2 border text-yellow-50  no-underline border-white rounded  hover:bg-white text-2xl bg-blue-400 hover:text-zinc-800 transition-all duration-300 ">Sign up</Link>
                    </div>
                 </>)}
                   <button className="text-white text-4xl hover:text-blue-700 md:hidden" onClick={()=> (mobile==="hidden" ? setMobile("block") : setMobile("hidden"))}>
                   < GiHamburgerMenu />
                   </button>
                       
                    
                </div>
            
              
        </nav>

         <div className={` ${mobile} bg-zinc-700  absolute top-10 right-0 h-[100vh] w-[75vw] z-40 flex flex-col items-center rounded justify-center`}>
       
                    {
                    links.map((items,i)=> <Link   onClick={()=> (mobile==="hidden" ? setMobile("block") : setMobile("hidden"))} to={items.link} key={i} className={` text-4xl m-2  text-zinc-200 no-underline font-[400] hover:text-blue-500 transition-all duration-300`}> {items.title} </Link>

                    )
                   }
                    
                  
                        {isloggedIn === false && (<>
                           <Link  onClick={()=> (mobile==="hidden" ? setMobile("block") : setMobile("hidden"))} to="/sign-in" className="px-3 py-2 border text-yellow-50 mb-8 no-underline font-[400] border-blue-500 rounded text-4xl hover:bg-white hover:text-zinc-800 transition-all duration-300 ">Sign in</Link>
                        <Link  onClick={()=> (mobile==="hidden" ? setMobile("block") : setMobile("hidden"))} to="/sign-up" className="px-3 py-2 border text-yellow-50  no-underline font-[400] border-white rounded  hover:bg-white text-4xl bg-blue-400 hover:text-zinc-800 transition-all duration-300 ">Sign up</Link>
                
                        </>)}

         </div>

        </>
    );
 }
 
 export default Navbar;