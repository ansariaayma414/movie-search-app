import React, { useState } from 'react'
import { Navbar } from './Components/Navbar';
import Header from './Components/Header';
import { TrendyMovies } from './Components/TrendyMovies';
import { SearchResults } from './Components/SearchResults';
import './Components/loadingAnimation.css'
import { Route , Routes } from 'react-router-dom';
import { MovieDetails } from './Components/MovieDetails';



export const App = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  return (
      <>
   <Navbar />
      <Routes>
      <Route path="/" element= {
       
      
    <>

      <Header
        onSearchResults={setSearchMovies}
        setLoading={setLoading}
        setIsSearching={setIsSearching}
      />

      {isSearching ? (
        loading ? (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        ) : (
          <SearchResults movies={searchMovies}
          />
        )
      ) : (
        <TrendyMovies />
      )}
       </>
      }/>

       <Route
        path="/movie/:id"
        element={<MovieDetails />}
      />
   
   </Routes>
   </>
      
  );
};

export default App;
