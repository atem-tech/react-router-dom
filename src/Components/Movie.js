import React, { useEffect } from "react";

const Movie = (props) => {
  //  Title
  //  Year
  //  Rated
  //  Released
  //  Runtime
  //  Genre
  //  Director
  //  Poster
  useEffect(() => {
    console.log("This is about page");

    return () => {
      console.log("You live about page");
    };
  }, []);
  return (
    <div>
      <h1>Title:{props.movie.Title}</h1>
      <h1>Title:{props.movie.Year}</h1>
      <h1> Title:{props.movie.Rated}</h1>
      <h1> Title:{props.movie.Released}</h1>
      <h1>Title:{props.movie.Actors}</h1>
      <h1>Title:{props.movie.Directors}</h1>
      <img src={props.movie.Poster} />
    </div>
  );
};

export default Movie;
