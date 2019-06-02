import React from "react";
import MoviesList from "./MoviesList";
import { connect } from "react-redux";
import { fetchMovies, fetchMovieDetail } from "../actions";

class Movies extends React.Component {
  state = { selectMovie: null };
  componentDidMount() {
    if (!this.props.movies[0]) {
      this.props.fetchMovies("Batman"); // Titulo por default
    }
  }
  componentDidUpdate() {
    this.props.fetchMovieDetail(this.props.movies[0].imdbID);
  }

  onMovieSelect = movie => {
    this.props.fetchMovieDetail(movie.imdbID);
  };

  render() {
    return (
      <div className="ui one column stackable center aligned page grid">
        <MoviesList
          movies={this.props.movies}
          onMovieSelect={this.onMovieSelect}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ movies }) => {
  return { movies: movies.data };
};

export default connect(
  mapStateToProps,
  { fetchMovies, fetchMovieDetail }
)(Movies);
