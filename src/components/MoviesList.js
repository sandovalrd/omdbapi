import React from "react";
import MoviesItems from "./MoviesItems";
import AliceCarousel from "react-alice-carousel";

const MoviesList = ({ movies, onMovieSelect }) => {
  const responsive = {
    0: { items: 1 },
    500: { items: 2 },
    800: { items: 3 },
    1024: {
      items: 4
    }
  };
  const renderList = movies.map(movie => {
    return (
      <MoviesItems
        movie={movie}
        key={movie.Title}
        onMovieSelect={onMovieSelect}
      />
    );
  });
  return (
    <AliceCarousel mouseDragEnabled responsive={responsive}>
      {renderList}
    </AliceCarousel>
  );
};

export default MoviesList;
