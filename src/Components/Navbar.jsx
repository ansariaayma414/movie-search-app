import React from 'react'
import movie_icon from "../assets/movie-icon.jpg";
import { Link } from 'react-router-dom';
export const Navbar = () => {
  return (
  <>
    <div className="flex justify-between gap-10 bg-(--background-color) shadow-lg shadow-white/10 text-main-text p-5 text-(--main-text) h-10  items-center pt-8">
        <div className="flex gap-2 items-center">
        <img src={movie_icon} alt="Movie Icon" width="30"/>
        <h2 className="text-lg">Movie<span className="text-(--primary-purple)">Hub</span></h2>
        </div>
            <div className="flex gap-10">
         <Link to ="/" > <h2 className="cursor-pointer text-lg">Home</h2></Link>
            <h2 className="cursor-pointer text-lg">Favourite</h2>
            </div>
        
    </div>
    </>
  )
}
export default Navbar;
