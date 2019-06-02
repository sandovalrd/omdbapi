import React from "react";
import "./movies.css";
import { connect } from "react-redux";
import { fetchMovieDetail } from "../actions";

class MovieDetail extends React.Component {
  state = { list: [] };

  componentDidMount() {
    this.loadLocalStorage();
  }

  loadLocalStorage = () => {
    // Se cargan todas las llaves que existan en localStorage
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          this.setState({ [key]: value });
        }
      }
    }
  };

  onAddNewFavorite = () => {
    const newItem = {
      id: this.props.movie.imdbID,
      title: this.props.movie.Title,
      poster: this.props.movie.Poster,
      year: this.props.movie.Year
    };
    const list = [...this.state.list];
    list.push(newItem);
    this.setState({ list });
    localStorage.setItem("list", JSON.stringify(list));
  };

  onDeleteFavorite = id => {
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);
    this.setState({ list: updatedList });
    localStorage.setItem("list", JSON.stringify(updatedList));
  };

  onFavoriteClick = () => {
    const favoriteActive = this.getFavorite();
    if (favoriteActive) {
      this.onDeleteFavorite(this.props.movie.imdbID);
    } else {
      this.onAddNewFavorite();
    }
  };

  getFavorite = () => {
    const list = JSON.parse(localStorage.getItem("list"));
    const { imdbID } = this.props.movie;
    const favorite = list.some(item => item.id === imdbID);
    if (favorite) {
      return "active";
    } else {
      return "";
    }
  };

  render() {
    const favoriteActive = this.getFavorite();
    return (
      <div className="ui grid">
        <div className="ui row">
          <div className="four wide column">
            <img
              className="ui Large image"
              src={this.props.movie.Poster}
              alt={this.props.movie.imdbID}
            />
          </div>
          <div className="ten wide column">
            <div className="content items">
              <div className="extra">
                <b>Title: </b> {this.props.movie.Title}
              </div>
              <div className="extra">
                <b>Year:</b> {this.props.movie.Year}
              </div>
              <div className="extra">
                <b>Director:</b> {this.props.movie.Director}
              </div>
              <div className="extra">
                <b>Production:</b> {this.props.movie.Production}
              </div>
              <div className="extra">
                <b>Genre:</b> {this.props.movie.Genre}
              </div>
              <div className="extra">
                <b>Language:</b> {this.props.movie.Language}
              </div>
              <div className="extra">
                <b>BoxOffice:</b> {this.props.movie.BoxOffice}
              </div>
              <div className="extra">
                <b>Plot:</b> {this.props.movie.Plot}
              </div>
              <div className="extra">
                <b>Runtime:</b> {this.props.movie.Runtime}
              </div>
              <div className="extra">
                <b>Favorite: </b>
                <i
                  className={`favorite icon ${favoriteActive}`}
                  onClick={this.onFavoriteClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ movie }) => {
  return { movie: movie.data };
};

export default connect(
  mapStateToProps,
  { fetchMovieDetail }
)(MovieDetail);
