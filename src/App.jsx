import React, { useEffect } from "react";
import Home from "./pages/home";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import { Routes,Route} from "react-router-dom";
import AllBooks from "./pages/AllBooks";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp"
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import AboutUs from "./pages/AboutUs";
import ViewBookDetails from "./components/viewbookdetails/ViewBookDetails";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./Store/auth";
import Favourites from "./components/Profile/favourites";
import Orderhistory from "./components/Profile/Orderhistory";
import Setting from "./components/Profile/Setting";
import AllOrders from "./components/Profile/AllOrders";
import AddBooks from "./pages/AddBooks";
import Updatebook from "./pages/UpdateBook";



function App() {

  const dispatch = useDispatch();
  const role= useSelector((state)=> state.auth.role);
  
  useEffect(()=>{
    if(
      localStorage.getItem("id")&&
          localStorage.getItem("token")&&
          localStorage.getItem("role")
    ){
      dispatch(authActions.login());
      dispatch(authActions.ChangeRole(localStorage.getItem("role")));
    }
  },[]);
  


  return (  <div>
    
   <Navbar/>
   <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route  path="/all-books" element={<AllBooks/>} />
    <Route  path="/sign-in" element={<SignIn/>} />
      
    <Route  path="/sign-up" element={<SignUp/>} />
    <Route  path="/cart" element={<Cart/>} />
    <Route  path="/profile" element={<Profile/>} >
   {role==="user"? <Route index element={<Favourites />} /> : <Route index element={<AddBooks />} />}
   {role==="admin" && <Route path="/profile/addbooks" element={<AddBooks />} /> }
    <Route path="/profile/Favourites"  element={<Favourites/>}  />
    <Route path="/profile/allorders"  element={<AllOrders/>}  />
    <Route  path="/profile/orderhistory" element={<Orderhistory/>} />
    <Route  path="/profile/settings" element={<Setting/>} />
    </Route>
    <Route  path="/about-us" element={<AboutUs/>} />
    <Route  path="/updatebook/:id" element={<Updatebook/>} />
    <Route  path="/view-book-details/:id" element={<ViewBookDetails/>} />
   </Routes>
   <Footer/>
  
   </div>
  );
}

export default App;