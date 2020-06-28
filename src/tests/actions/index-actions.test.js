import {
  fetchData,
  fetchDataSuccess,
  fetchDataStart,
} from "../../store/actions/index";

import * as actionTypes from "../../store/actions/action-types";
import { makeMockStore } from "../../utils/testUtils";
import moxios from "moxios";
import { responseData } from "./data";

const store = makeMockStore({
  restaurant: {
    isLoading: false,
    restaurants: [],
  },
});
describe("should test action creator", () => {
  test("fetchDataStart should be called with correct type", () => {
    const action = fetchDataStart();
    expect(action).toEqual({
      type: actionTypes.FETCH_DATA_START,
    });
  });

  test("fetchDataSuccess should be called with correct data", () => {
    const restaurants = [
      { name: "A", address: "A", id: 1 },
      { name: "B", address: "B", id: 2 },
    ];
    const action = fetchDataSuccess(restaurants);
    expect(action).toEqual({
      type: actionTypes.FETCH_DATA_SUCCESS,
      payload: restaurants,
    });
  });
});

describe("testing thunks", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test("creates FETCH_TODOS_SUCCESS when fetching todos has been done", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(responseData);
    });
    store.dispatch(fetchData()).then(() => {
      const actionsCalled = store.getActions();
      expect(actionsCalled[0].toEqual(fetchData()));
    });
  });
});
