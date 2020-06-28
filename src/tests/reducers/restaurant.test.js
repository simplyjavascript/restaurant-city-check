import * as actionTypes from "../../store/actions/action-types";
import restaurantReducer from "../../store/reducers/restaurant.reducer";
import { responseData } from "../actions/data";

describe("test reducers", () => {
  test("should have default state", () => {
    const newState = restaurantReducer(undefined, {});
    expect(newState).toEqual({
      isLoading: false,
      restaurants: [],
    });
  });

  test("should test loading start state", () => {
    const newState = restaurantReducer(undefined, {
      type: actionTypes.FETCH_DATA_START,
    });
    expect(newState).toEqual({
      isLoading: true,
      restaurants: [],
    });
  });

  test("should test loading success state", () => {
    const newState = restaurantReducer(undefined, {
      type: actionTypes.FETCH_DATA_SUCCESS,
      payload: responseData.response.restaurants,
    });
    expect(newState).toEqual({
      isLoading: false,
      restaurants: [...responseData.response.restaurants],
    });
  });
});
