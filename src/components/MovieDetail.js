import React from "react";
import "./movies.css";
import { connect } from "react-redux";
import { fetchMovieDetail } from "../actions";

class MovieDetail extends React.Component {
  state = { claseActive: "favorite icon" };
  componentDidMount() {
    this.props.fetchMovieDetail("tt0372784");
  }
  onFavoriteClick = () => {
    if (this.state.claseActive === "favorite icon active") {
      return this.setState({ claseActive: "favorite icon" });
    }
    return this.setState({ claseActive: "favorite icon active" });
  };
  render() {
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
                <b>Título: </b> {this.props.movie.Title}
              </div>
              <div className="extra">
                <b>Año:</b> {this.props.movie.Year}
              </div>
              <div className="extra">
                <b>Director:</b> {this.props.movie.Director}
              </div>
              <div className="extra">
                <b>Producción:</b> {this.props.movie.Production}
              </div>
              <div className="extra">
                <b>Genero:</b> {this.props.movie.Genre}
              </div>
              <div className="extra">
                <b>Lenguajes:</b> {this.props.movie.Language}
              </div>
              <div className="extra">
                <b>Taquilla:</b> {this.props.movie.BoxOffice}
              </div>
              <div className="extra">
                <b>Trama:</b> {this.props.movie.Plot}
              </div>
              <div className="extra">
                <b>Duración:</b> {this.props.movie.Runtime}
              </div>
              <div className="extra">
                <b>Add to favorites: </b>
                <i
                  className={this.state.claseActive}
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
