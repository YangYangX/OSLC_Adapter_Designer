/**
 * appSelector
 *
 * Selector is a safe way to read immutable state from redux store.
 *
 * selector api and functions can be referenced from:
 * https://facebook.github.io/immutable-js/
 *
 */

import { createSelector } from "reselect";

import _ from "lodash";
import { fromJS } from "immutable";

export const aboutDialogSelector = state =>
  state.getIn(["system", "about"], fromJS({}));

export const aboutDialogStatusSelector = createSelector(
  aboutDialogSelector,
  aboutDialog => aboutDialog.get("aboutEnable", false)
);
