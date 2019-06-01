import React from "react";

const MoviesItems = ({ movie, onMovieSelect }) => {
  return (
    <div
      className="ui item"
      onClick={() => onMovieSelect(movie)}
      style={{ cursor: "pointer", width: "100px" }}
    >
      <img className="ui tiny image" src={movie.Poster} alt={movie.imdbID} />
      <div className="content">
        <div className="header">{movie.Title}</div>
        <div className="description">
          <p>{movie.Year}</p>
        </div>
      </div>
    </div>
  );
};

export default MoviesItems;
