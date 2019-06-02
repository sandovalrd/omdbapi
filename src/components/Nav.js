import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMovies, fetchMovieDetail } from "../actions";

class Nav extends React.Component {
  state = { title: "" };
  onFormSubmit = event => {
    event.preventDefault();
    if (this.state.title !== "") {
      this.props.fetchMovies(this.state.title);
    }
  };
  onInputChange = event => {
    this.setState({ title: event.target.value });
  };
  render() {
    return (
      <div className="ui inverted menu">
        <Link to="/" className="item">
          <i className="video camera small icon active" />
          Movies
        </Link>
        <Link to="/favorites" className="item">
          <i className="favorite icon small active" />
          Favorites
        </Link>
        <div className="right menu">
          <div className="item">
            <form onSubmit={this.onFormSubmit} className="ui form">
              <div className="ui inverted right icon input">
                <input
                  type="text"
                  placeholder="Search Films..."
                  value={this.state.title}
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
