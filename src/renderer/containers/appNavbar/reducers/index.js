/**
 * appReducer
 *
 * Reducer that takes care of our data. Using actions to change
 * application state.
 *
 * Logic defined for each action in handleActions function and
 * this reducer will be connected to system reducer in config.
 *
 * Example:
 * handleActions(
 * {
 *   [combineActions(actionmethod)]: (state, action) =>
 *     state.merge(action.payload)
 *   },
 *   initialState
 * );
 *
 */

import { handleActions, combineActions } from "redux-actions";
import { fromJS } from "immutable";

import { updateAboutDialogStatus } from "../actions";

// the initial state of the application
const initialState = fromJS({
  aboutEnable: false
});

export default handleActions(
  {
    [combineActions(updateAboutDialogStatus)]: (state, action) =>
      state.merge(action.payload)
  },
  initialState
);
