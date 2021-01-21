import { combineReducers } from "redux";
import cartReducer from "./CartReducer";
//import all reducers here

export default combineReducers({
  cart: cartReducer,
});
