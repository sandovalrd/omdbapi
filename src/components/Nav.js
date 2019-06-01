import React from "react";
import { connect } from "react-redux";
import { fetchMovies, fetchMovieDetail } from "../actions";

class Nav extends React.Component {
  state = { term: "" };
  onFormSubmit = event => {
    event.preventDefault();
    this.props.fetchMovies(this.state.term);
  };
  onInputChange = event => {
    this.setState({ term: event.target.value });
  };
  render() {
    return (
      <div className="ui pointing menu">
        <a href="/" className="item">
          Favoritos
        </a>
        <div className="right menu">
          <div className="item">
            <form onSubmit={this.onFormSubmit} className="ui form">
              <div className="ui transparent icon input">
                <input
                  type="text"
                  placeholder="Buscar Películas..."
                  value={this.state.term}
                  onChange={this.onInputChange}
                />
                <i onClick={this.onFormSubmit} className="search link icon" />
              </div>
            </form>
          </div>
        </div>
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
)(Nav);
