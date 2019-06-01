import React from "react";
import { connect } from "react-redux";
import { fetchMovieDetail } from "../actions";

class MovieDetail extends React.Component {
  componentDidMount() {
    this.props.fetchMovieDetail("tt0372784");
  }
  render() {
    return (
      <div className="ui grid">
        <div className="ui row">
          <div className="four wide column">
            <img
              className="ui image"
              src={this.props.movie.Poster}
              alt={this.props.movie.imdbID}
              style={{ width: "250px", height: "280px" }}
            />
          </div>
          <div className="ten wide column">
            <div className="content">
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
