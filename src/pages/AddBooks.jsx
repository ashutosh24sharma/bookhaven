import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function AddBooks() {

 const navigate=useNavigate();

   const [Data,SetData] = useState({
    url:"",
    title:"",
    author:"",
    price:"",
    desc:"",
    language:"",
   });

   const headers= {

    id:localStorage.getItem("id"),
  
    authorization:`Bearer ${localStorage.getItem("token")}`,
    
  };

  const change=(e)=>{
    const {name,value}=e.target;
    SetData({...Data,[name]:value});
  };

  const submit=async ()=>{
    try {
        if(Data.url==="" ||Data.title==="" ||Data.author==="" ||Data.desc==="" ||Data.language==="" ||Data.price===""){
            alert("All fields are required");
        }else{
            const response= await axios.post("https://bookhaven-gx84.onrender.com/api/v1/add-book",Data,{headers});
            SetData({
                url:"",
                title:"",
                author:"",
                price:"",
                desc:"",
                language:"",
               });
               alert(response.data.message);
               navigate("/all-books")
        }
    } catch (error) {
        alert(error.response.data.message)
    }
  }
  
  return (
    <div className='h-[100%] p-0 md:p-4 '>
        <h1 className='text-3xl md:text-7xl font-semibold text-zinc-500 mb-8'>Add Books</h1>

        <div className='p-4 bg-zinc-800 rounded'>
            <div>
                <label className='text-zinc-400 md:text-3xl'>Image</label>
                <input type='text' className='w-full mt-2 md:text-xl bg-zinc-900 text-zinc-100 md:p-3 outline-none' 
                placeholder='url of image'
                name="url" required value={Data.url} onChange={change}/>
            </div>
            <div className='mt-4'>
                <label className='text-zinc-400 md:text-3xl'>Title of the book</label>
                <input type='text' className='w-full mt-2 md:text-xl bg-zinc-900 text-zinc-100  md:p-3 outline-none' 
                placeholder='title of the book'
                name="title" required value={Data.title} onChange={change}/>
            </div>
            <div className='mt-4'>
                <label className='text-zinc-400 md:text-3xl'>Author</label>
                <input type='text' className='w-full mt-2 md:text-xl bg-zinc-900 text-zinc-100  md:p-3 outline-none' 
                placeholder='name of book Author'
                name="author" required value={Data.author} onChange={change}/>
            </div>
            <div className='mt-4 flex gap-4'>
           
            <div className='w-3/6'>
                <label className='text-zinc-400 md:text-3xl'>Language</label>
                <input type='text' className='w-full mt-2 md:text-xl bg-zinc-900 text-zinc-100  md:p-3 outline-none' 
                placeholder='language of book'
                name="language" required value={Data.language} onChange={change}/>
            </div>
            <div className='w-3/6'>
                <label className='text-zinc-400 md:text-3xl'>Price</label>
                <input type='number' className='w-full mt-2 md:text-xl bg-zinc-900 text-zinc-100  md:p-3 outline-none' 
                placeholder='price of book'
                name="price" required value={Data.price} onChange={change}/>
            </div>
            </div>
            <div className='mt-4'>
                <label className='text-zinc-400 md:text-3xl'> Book Description</label>
                <textarea  rows="7" type='text' className='w-full mt-2 bg-zinc-900 md:text-xl text-zinc-100 p-2 outline-none' 
                placeholder='Enter Description of book'
                name="desc" required value={Data.desc} onChange={change}/>
            </div>

            <button className='mt-4 px-3 bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition-all' onClick={submit}>Add Book</button>
        </div>
      
    </div>
  )
}

export default AddBooks;