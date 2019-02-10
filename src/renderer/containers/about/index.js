/**
 *
 * home page
 *
 * This component is the home page not found page.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { push } from 'connected-react-router';
import _ from 'lodash';

// UI Framework
import {
  Classes,
  Alignment,
  Button,
  Alert,
  Icon,
  Card,
  Intent,
  Toaster,
  Dialog,
  Tooltip,
  Position,
  Navbar,
  Divider,
  NavbarGroup,
  NavbarHeading,
} from '@blueprintjs/core';

import { Grid, Button as SemanticButton } from 'semantic-ui-react';

import { appIcon, logoAbout, docIcon } from '../../asserts';

// Style
import Styles from './style';

// Class Home, basic component for application
class About extends Component {
  state = {
    aboutDialogOpen: false,
  };

  /**
   * constructor function
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this._renderAboutDialog = this._renderAboutDialog.bind(this);
  }

  componentDidMount() {}
  _renderAboutDialog = () => {
    return (
      <Dialog
        icon="info-sign"
        title="关于"
        onClose={() => {}}
        autoFocus={true}
        canEscapeKeyClose={false}
        canOutsideClickClose={false}
        enforceFocus={true}
        isOpen={this.props.isOpen}
        usePortal={true}
        style={Styles.AboutDialog}
      >
        <div className={Classes.DIALOG_BODY}>
          <p style={Styles.aboutLogoContainer}>
            <img src={logoAbout} style={Styles.aboutLogo} />
          </p>
          <p>
            <strong>OSLC Adapter 设计器</strong>
          </p>
          <p>
            路办基林平平即什无，所容土而安满了内局，济K采束合1芬。影她清二示观新，空于断特术亲增拉，路建医具结的。点南性强林情构人度，土候少东律非采三候，消孤建批达丽位.
          </p>
          <p>
            经等定任感，观的8门意亲般。如除属下花记条算真县，前就圆我矿教论阶议，建起孤态里示茄葛。速织单他王想看给构步民但民住，战号响铁地建码里求或观。度十县此计识高划把队界标，六再具.
          </p>
          <p>
            路办基林平平即什无，所容土而安满了内局，济K采束合1芬。影她清二示观新，空于断特术亲增拉，路建医具结的。点南性强林情构人度，土候少东律非采三候，消孤建批达丽位。关十位保手持头，少提工第观专，这E级杜常.
          </p>
          <p>持认务门把拉属器然七，家积京具原取象值无观，相连屈批取芦影励.</p>

          <p style={Styles.aboutVersionInfo}>版本号: 1.0.1.A</p>
        </div>
        <div className={Classes.DIALOG_FOOTER}>
          <div className={Classes.DIALOG_FOOTER_ACTIONS}>
            <Tooltip content="访问网络并检查更新">
              <Button intent={Intent.SUCCESS}>检查更新</Button>
            </Tooltip>
            <Tooltip content="关闭对话框">
              <Button
                intent={Intent.DANGER}
                onClick={() => this.setState({ aboutDialogOpen: false })}
              >
                关闭
              </Button>
            </Tooltip>
          </div>
        </div>
      </Dialog>
    );
  };

  render() {
    const { navTo } = this.props;
    return this._renderAboutDialog();
  }
}

// Default props
About.defaultProps = {};

// Prop attributes types
About.propTypes = {};

/**
 * mapStateToProps is a function provided to pull data from the store when it changes,
 * and pass those values as props to your component.
 *
 * @param {*} state
 */
const mapStateToProps = state => ({});

/**
 * mapDispatchToProps is a function provided to make use of the store's dispatch function,
 * usually by creating pre-bound versions of action creators that will automatically
 * dispatch their actions as soon as they are called.
 *
 * @param {*} dispatch
 */
const mapDispatchToProps = dispatch => ({
  navTo: location => dispatch(push(location)),
});

// Export Home container
export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false }
)(About);
