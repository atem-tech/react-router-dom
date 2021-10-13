import React, { useEffect } from "react";

const Movie = (props) => {

  useEffect(() => {
    console.log("This is about page");

    return () => {
      console.log("You live about page");
    };
  }, []);
  return (
    <div>
      <h1>Title:{props.movie.Title}</h1>
      <h1>Year:{props.movie.Year}</h1>
      <h1> Rated:{props.movie.Rated}</h1>
      <h1> Released:{props.movie.Released}</h1>
      <h1>Actors:{props.movie.Actors}</h1>
      <h1>Directors:{props.movie.Directors}</h1>
      <img src={props.movie.Poster} />
    </div>
  );
};

export default Movie;
