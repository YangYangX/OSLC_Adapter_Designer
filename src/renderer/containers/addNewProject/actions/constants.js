/**
 * App constants
 *
 * Each action has a corresponding type, which the reducer knows and handle it.
 * To avoid weird typos between reducer and actions, all the action type should
 * be saved as constants.
 *
 * Prefix rules for action type constant will be something like 'project/component'
 * this will avoid reducers accidentally picking up actions they shouldn't.
 *
 * Follow format:
 * export const ACTION_CONTSTANT = 'project/container/ACTION_CONSTANT'
 */

export const UPDATE_WIZARD_STATUS =
  "OSLC_ADAPTER_DESIGNER/addNewProject/actions/UPDATE_WIZARD_STATUS";
export const UPDATE_RESET =
  "OSLC_ADAPTER_DESIGNER/addNewProject/actions/UPDATE_RESET";
