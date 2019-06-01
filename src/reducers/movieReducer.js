import { FETCH_DETAIL } from "../actions/types";

const INICIAL_STATE = {
  data: []
};

export default (state = INICIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DETAIL:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};
