import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetails = () => {
  const {id} = useParams()
  const [movie,setMovie] = useState(null);

 useEffect(() => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  };

  fetch(
    `https://api.themoviedb.org/3/movie/${id}`,
    options
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setMovie(data);
    })
    .catch((err) => console.error(err));
}, [id]);
  console.log(id);
return (
  <div className="min-h-screen bg-[#0f0f12] text-white px-6 py-10">
    {movie && (
      <div className="max-w-6xl mx-auto">

        {/* Main Movie Details */}
        <div className="flex flex-col md:flex-row gap-10 bg-[#18181c] p-8 rounded-2xl shadow-2xl">

          {/* Poster */}
          <div className="flex-shrink-0">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-72 h-[430px] object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Movie Information */}
          <div className="flex flex-col justify-center gap-5 flex-1">

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold">
              {movie.title}
            </h1>

            {/* Release + Rating */}
            <div className="flex flex-wrap gap-4 text-gray-300">
              <span>
                Release: {movie.release_date}
              </span>

              <span className="text-yellow-400">
                ⭐ {movie.vote_average.toFixed(1)}
              </span>
            </div>

            {/* Genres */}
            <div className="flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="px-3 py-1 rounded-full bg-[#6c4df6] text-sm"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            {/* Overview */}
            <div>
              <h2 className="text-xl font-semibold mb-2">
                Overview
              </h2>

              <p className="text-gray-400 leading-7">
                {movie.overview}
              </p>
            </div>

            {/* Runtime */}
            <p className="text-gray-300">
              Runtime: {movie.runtime} minutes
            </p>

            {/* Language */}
            <p className="text-gray-300">
              Language: {movie.original_language?.toUpperCase()}
            </p>

          </div>
        </div>
      </div>
    )}
  </div>
);
}
