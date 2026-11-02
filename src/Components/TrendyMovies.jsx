import React from "react";
import { useState, useEffect } from "react";
import { Card } from "./Card";

export const TrendyMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: { accept: "application/json", Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`, },
    };

    fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      options,
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <div className="flex justify-between items-center p-5 text-white">
        <h2 className="text-2xl font-bold">Trending Movies</h2>
        <p className="text-(--primary-purple) text-lg cursor-pointer">
          View All
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        {movies.map((movie)=>(
            <Card movie={movie}
            key={movie.id}/>
        ))}
      
      </div>
    </>
  );
};
