import React, { useEffect } from "react";
import { useState } from "react";
import "./responsive.css"
export const Header = ({ onSearchResults, setIsSearching }) => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

 const handleClick = () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  };

  setIsSearching(true);
  setLoading(true);

  fetch(
    `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`,
    options
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      onSearchResults(data.results);
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
      setLoading(false);
    });
};

  return (
    <>
      <div className="text-(--main-text) flex flex-col gap-3 items-center justify-center h-96">
        <div className="flex flex-col gap-2">
          <h2 className="text-5xl font-bold flex flex-col gap-2">
            Find Your Next
            <span className="text-(--primary-purple)">Favourite Movie</span>
          </h2>
        </div>
        <div>
          <h2 className="text-lg">
            Search your favourite movie by name and get all the information
            about it
          </h2>
        </div>
        <div className="search-container p-5 text-black flex items-center w-180 h-12 rounded-xl gap-2 bg-(--cards) mt-5">
          <img
            src="https://cdn-icons-png.flaticon.com/128/954/954591.png"
            width="25"
            className=""
          />
          <div className=" flex items-center justify-between w-180  ">
            <input
              type="text"
              placeholder="Search Movie"
              className="search-input w-1/2 h-12 rounded-lg p-2 text-white flex items-center  border-none outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="text-white pl-5 pr-5 bg-(--primary-purple) h-10 -mr-5 cursor-pointer rounded-2xl"
              onClick={handleClick}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
