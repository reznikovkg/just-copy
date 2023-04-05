import { createStore, combineReducers } from "redux";
import progressReducer from "./reducers";

const rootReducer = combineReducers({
  progress: progressReducer,
});

const store = createStore(rootReducer);

export default store;
