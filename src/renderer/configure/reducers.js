/**
 * reducer
 *
 * appReducer:
 * reducer defined for application.
 *
 * routerReducer:
 * the reducer merges route location changes into the immutable state,
 * this part is handled by react-router-redux.
 */

import { combineReducers } from "redux-immutable";
import { connectRouter } from "connected-react-router/immutable";

// App reducers
import addNewProjectReducer from "../containers/addNewProject/reducers";

// App Reducers handles application system level states.
const systemReducers = combineReducers({
  addNewProject: addNewProjectReducer
});

/**
 * Create the main reducer with appReducer and routeReducer
 */
const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    system: systemReducers
  });

export default rootReducer;
