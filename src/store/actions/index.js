import * as actionTypes from "./action-types";
import axios from "axios";

export const fetchDataSuccess = (data) => {
  return {
    type: actionTypes.FETCH_DATA_SUCCESS,
    payload: data,
  };
};

export const fetchDataStart = (data) => {
  return {
    type: actionTypes.FETCH_DATA_START,
  };
};
export const fetchData = (search) => {
  return (dispatch) => {
    dispatch(fetchDataStart());
    return axios
      .get(`http://opentable.herokuapp.com/api/restaurants?city=${search}`)
      .then((res) => {
        const data = res.data.restaurants;
        dispatch(fetchDataSuccess(data));
      })
      .finally(() => console.log("Request completed.."));
  };
};
