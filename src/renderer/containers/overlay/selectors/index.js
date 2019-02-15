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

export const overlaySelector = state =>
  state.getIn(["system", "overlay"], fromJS({}));

export const overlayStatusSelector = createSelector(
  overlaySelector,
  overlay => overlay.get("overlayEnable", false)
);

export const overlayMessageSelector = createSelector(
  overlaySelector,
  overlay => overlay.get("overlayMessage", "加载中...")
);
