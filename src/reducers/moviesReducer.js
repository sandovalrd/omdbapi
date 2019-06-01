import { FETCH_MOVIE } from "../actions/types";

const INICIAL_STATE = {
  data: [],
  selectMovie: null
};

export default (state = INICIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MOVIE:
      return {
        ...state,
        data: action.payload,
        selectMovie: action.payload[0].imdbID
      };
    default:
      return state;
  }
};
