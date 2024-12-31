import React from "react";


const Navbar = () => {

    return <header>
        <h2 class="nav-logo-container">Logo</h2>



        <nav className="navigation">
            <a href="#" role="button" onClick={(e) => { e.preventDefault(); console.log("Go to Home"); }}>Home</a>
            <a href="#" role="button" onClick={(e) => { e.preventDefault(); console.log("Go to Hall Expo"); }}>Hall Expo</a>
            <a href="#" role="button" onClick={(e) => { e.preventDefault(); console.log("Go to About Us"); }}>About Us</a>
            <a href="#" role="button" onClick={(e) => { e.preventDefault(); console.log("Sign In"); }}>Sign In</a>
            <a href="#" className="btnLogin-popup" role="button" onClick={(e) => { e.preventDefault(); console.log("Sign Up"); }}>Sign Up</a>
        </nav>




    </header>;


};

export default Navbar;