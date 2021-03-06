import omdbapi from "../api/omdbapi";
import history from "../history";
import { FETCH_MOVIE, FETCH_DETAIL } from "./types";

export const fetchMovies = titleMovie => async dispatch => {
  const response = await omdbapi.get("/", {
    params: {
      s: titleMovie,
      apikey: process.env.REACT_APP_OMDBAPI_KEY
    }
  });
  if (response.data.Search) {
    dispatch({ type: FETCH_MOVIE, payload: response.data.Search });
    history.push("/");
  } else {
    alert(`No se encontraron películas con el título: ${titleMovie}`);
  }
};

export const fetchMovieDetail = idMovie => async dispatch => {
  const response = await omdbapi.get("/", {
    params: {
      i: idMovie,
      apikey: process.env.REACT_APP_OMDBAPI_KEY
    }
  });
  dispatch({ type: FETCH_DETAIL, payload: response.data });
};
