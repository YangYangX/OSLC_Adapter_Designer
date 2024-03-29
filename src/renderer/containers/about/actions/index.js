/**
 * App actions
 *
 * These actions are the only way the application change/update its state.
 * this will guarantee that the application state will not be messed up.
 *
 * To add a new action:
 *
 * 1) import constant
 * 2) add a action creator function:
 *    export actionCreater = var -> {type: ACTION_CONSTANT, var: var}
 */

import { createAction, createActions } from "redux-actions";
import { ABOUT_DIALOG_STATUS } from "./constants";

/**
 * set wizard status
 *
 * @param {boolean} status
 *
 * @return {object} An action object with a type of SELECT_LOCALE and language string
 */
export const updateAboutDialogStatus = createAction(
  ABOUT_DIALOG_STATUS,
  status => {
    return { aboutEnable: status };
  }
);
