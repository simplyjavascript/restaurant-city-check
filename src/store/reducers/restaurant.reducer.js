import { FETCH_DATA_SUCCESS, FETCH_DATA_START } from "../actions/action-types";

const initialState = {
  isLoading: false,
  restaurants: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        restaurants: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
