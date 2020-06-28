import rootReducer from "../store/reducers/index";
import { createStore, applyMiddleware } from "redux";
import { middlewares } from "../store/configureStore";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
export const storeFactory = (initState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, initState);
};

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

const mockStore = configureStore([thunk]);
export const makeMockStore = (state = {}) => {
  return mockStore({
    ...state,
  });
};
