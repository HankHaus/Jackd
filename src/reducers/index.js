import { combineReducers } from "redux";
import WorkoutCreatorReducers from "./WorkoutCreatorReducers";
import ThemeReducers from "./ThemeReducers";
import BarbellReducers from "./BarbellReducers";

// Combine Redux reducers to allow multiple reducers to have access to the store
export default combineReducers({
  workoutCreator: WorkoutCreatorReducers,
  theme: ThemeReducers,
  barbell: BarbellReducers,
});
