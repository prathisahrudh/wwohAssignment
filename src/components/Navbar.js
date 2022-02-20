import React from "react";

// Images Imports
import logo from "../images/logo.svg";
import allPosts from "../images/allposts.svg";

const Navbar = () => {
  return (
    <>
      <div className="navbar sticky-top shadow p-1 mb-2 ">
        <div>
          <img src={logo} alt="Brand Logo" />
          <p className="text-center">logo</p>
        </div>
        <div className="mx-2">
          <img src={allPosts} alt="All Posts" />
          <p className="text-center">all Posts</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
