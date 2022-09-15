import { GET_LOGS } from "../actions/types";
const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
};

const logReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default logReducer;
