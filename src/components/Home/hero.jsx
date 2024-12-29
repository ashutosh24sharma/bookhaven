import { Link } from "react-router-dom";

function Hero() {
    return ( <div className="md:h-screen flex flex-col md:flex-row ">
      <div className="lg:w-3/6 w-full flex flex-col lg:items-start justify-center"> 
      <h1 className="lg:text-9xl text-4xl font-semibold text-yellow-100">Discover Your Next Great Read</h1>
      <p className="mt-4 text-2xl text-zinc-300  lg:text-left"> uncover captivating stories, enriching knowledge, and endless inspiration in our curated collection of books <span className="text-2xl text-blue-400 font-serif">knowledge is the key of success</span></p>
      
      <Link to="all-books" className="text-3xl md:text-4xl font-semibold no-underline text-center text-white  border rounded-full py-2 md:py-4 md:px-8 m-3 border-blue-800 hover:bg-blue-500 hover:text-black">Discover Books</Link>
      </div>
      
      <div className="lg:w-3/6 w-full h-100 lg:h-[100%] flex item-center justify-center">
      <img  src="./herorbg.png" alt="hero" className="md:h-[85%]" />
      </div>

    </div>  );
}

export default Hero;