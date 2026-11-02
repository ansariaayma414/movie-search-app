import React from 'react'
import { useNavigate } from "react-router-dom";
export const Card = ({movie}) => {

  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap gap-5 p-5 overflow-x-auto scrollbar-hide">
    <div 
    onClick={() => navigate(`/movie/${movie.id}`)}
    className="w-52 bg-(--cards) rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">

      {/* Movie Poster */}
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-72 object-cover"
      />


      {/* Movie Information */}
      <div className="p-3 text-white">

        <h3 className="text-lg font-semibold truncate">
          {movie.title}
        </h3>

        <p className="text-sm text-gray-400 mt-1">
          {movie.release_date}
        </p>

        <p className="text-sm mt-1">
          ⭐ {movie.vote_average}
        </p>

      </div>
    </div>
  
    </div>
  )
}