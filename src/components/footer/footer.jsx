import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';


function Footer() {
    return ( 
        <div className="maincontainer bg-zinc-800 text-2xl text-white font-serif ">
    <div className="container ">
  <footer className="py-3  border-top ">
    <div className="row">
      <div className="col-6 col-md-2 mb-3 ">
        <h5>A bookstore is a place where books are sold. often providing a wide range of genres.</h5>
        
         
        
      </div>

      

      <div className="col-md-5 offset-md-1 mb-3">
        <htmlForm>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="htmlForm-control" placeholder="Email address"/>
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </htmlForm>
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between border-top">
      <p>© 2024 Company, Inc. All rights reserved.</p>
      
    </div>
  </footer>
</div>
</div> );
}

export default Footer;