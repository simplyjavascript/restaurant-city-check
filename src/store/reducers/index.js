import { combineReducers } from "redux";
import restrauntReducer from "./restaurant.reducer";
const reducer = combineReducers({
  restaurant: restrauntReducer,
});
export default reducer;
