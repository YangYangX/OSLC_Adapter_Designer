/**
 *
 * home page
 *
 * This component is the home page not found page.
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import _ from "lodash";

// UI Framework
import {
  Classes,
  Alignment,
  Button,
  Alert,
  Icon,
  Intent,
  Toaster,
  Spinner,
  Dialog
} from "@blueprintjs/core";

// Style
import Styles from "./style";

// Actions
import { updateOverlayStatus } from "./actions";

// Selectors
import { overlayStatusSelector, overlayMessageSelector } from "./selectors";

// Class Home, basic component for application
class Overlay extends Component {
  /**
   * constructor function
   * @param {*} props
   */
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const { overlayStatus, overlayMessage } = this.props;
    return (
      <Dialog
        isOpen={overlayStatus}
        canEscapeKeyClose={false}
        canOutsideClickClose={false}
        isCloseButtonShown={false}
      >
        <div className={Classes.DIALOG_BODY} style={Styles.Overlay}>
          <Spinner intent={Intent.DANGER} size={50} />
          <p style={Styles.OverlayText}>{overlayMessage}</p>
        </div>
      </Dialog>
    );
  }
}

// Default props
Overlay.defaultProps = {};

// Prop attributes types
Overlay.propTypes = {};

/**
 * mapStateToProps is a function provided to pull data from the store when it changes,
 * and pass those values as props to your component.
 *
 * @param {*} state
 */
const mapStateToProps = state => ({
  overlayStatus: overlayStatusSelector(state),
  overlayMessage: overlayMessageSelector(state)
});

/**
 * mapDispatchToProps is a function provided to make use of the store's dispatch function,
 * usually by creating pre-bound versions of action creators that will automatically
 * dispatch their actions as soon as they are called.
 *
 * @param {*} dispatch
 */
const mapDispatchToProps = dispatch => ({
  updateOverlayStatus: (status, message) =>
    dispatch(updateOverlayStatus(status, message))
});

// Export Home container
export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false }
)(Overlay);
