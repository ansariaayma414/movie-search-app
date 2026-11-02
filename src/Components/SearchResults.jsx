import React from "react";
import { useState } from "react";
import { Card } from "./Card";
import './loadingAnimation.css'

export const SearchResults = ({movies}) => {

   if (movies.length === 0) {
    return (
      <div className="text-white text-center mt-10">
        <h2 className="text-2xl font-semibold">
          No results found
        </h2>
        <p className="text-gray-400 mt-2">
          Try searching for another movie.
        </p>
      </div>
    );
  }
  return (
    <>
  


    <div className="flex flex-wrap justify-center">
      {movies.map((movie) => (
        <Card movie={movie} key={movie.id} />
      ))}
    </div>

    </>
  );
};
