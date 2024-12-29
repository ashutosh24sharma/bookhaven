import React from "react";
import Hero from "../components/Home/hero";
import Recently from "../components/Home/Recently";
 
 function Home() {
    return ( <div className="bg-zinc-900 text-white px-10 py-8">
      <Hero></Hero>
      <Recently/>
      

    </div> );
 }
 
 export default Home;