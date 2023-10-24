import { combineReducers } from "redux";
import gameReducer from "./slices/gameSlice";

export default combineReducers({
  game: gameReducer,
});
