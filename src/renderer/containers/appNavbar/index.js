/**
 *
 * home page
 *
 * This component is the home page not found page.
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { push } from "connected-react-router";
import _ from "lodash";

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
  Menu,
  MenuDivider,
  MenuItem,
  Popover
} from "@blueprintjs/core";

import { Grid, Button as SemanticButton } from "semantic-ui-react";

import { appIcon, logoAbout, docIcon } from "../../asserts";

// Style
import Styles from "./style";

// Actions
import { updateWizardStatus } from "../addNewProject/actions";
import { updateAboutDialogStatus } from "../about/actions";

// Class Home, basic component for application
class AppNavbar extends Component {
  state = {
    shareProjectalert: false,
    loginAlert: false
  };

  /**
   * constructor function
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.FileMenu = this.FileMenu.bind(this);
    this.ProjectMenu = this.ProjectMenu.bind(this);
    this.SystemMenu = this.SystemMenu.bind(this);
  }

  componentDidMount() {}

  FileMenu = () => (
    <Menu>
      <MenuItem
        icon="folder-new"
        text="新建..."
        shouldDismissPopover={true}
        onClick={() => {
          this.props.updateWizardStatus(true);
        }}
      />
      <MenuItem
        icon="panel-stats"
        text="所有项目"
        shouldDismissPopover={true}
        onClick={() => {
          this.props.navTo("/allprojects");
        }}
      />
      <MenuItem
        icon="folder-shared"
        text="在线项目共享"
        disabled={true}
        shouldDismissPopover={true}
      />
      <MenuDivider />
      <MenuItem icon="log-out" text="退出" />
    </Menu>
  );

  ProjectMenu = () => (
    <Menu>
      <MenuDivider title="项目" />
      <MenuItem icon="build" text="构建" shouldDismissPopover={true} />
      <MenuItem
        icon="folder-close"
        text="生成Java项目"
        shouldDismissPopover={true}
      />
      <MenuDivider title="导出" />
      <MenuItem icon="document" text="json文件" shouldDismissPopover={true} />
      <MenuDivider title="在线管理" />
      <MenuItem icon="git-commit" text="提交" disabled={true} />
      <MenuItem icon="git-pull" text="获取更新" disabled={true} />
      <MenuItem icon="cog" text="项目设置" disabled={true} />
    </Menu>
  );

  SystemMenu = () => (
    <Menu>
      <MenuItem icon="cog" text="设置" shouldDismissPopover={true} />
      <MenuItem icon="help" text="帮助" shouldDismissPopover={true} />
      <MenuItem icon="link" text="访问网站" shouldDismissPopover={true} />
      <MenuItem icon="error" text="报告错误" shouldDismissPopover={true} />
      <MenuDivider />
      <MenuItem icon="refresh" text="检查更新" shouldDismissPopover={true} />
      <MenuItem
        shouldDismissPopover={true}
        icon="info-sign"
        text="关于"
        onClick={() => {
          this.props.updateAboutDialogStatus(true);
        }}
      />
    </Menu>
  );

  render() {
    const { navTo, showProjectMenu } = this.props;

    return (
      <Navbar fixedToTop={true} style={Styles.navbar}>
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>
            <img src={logoAbout} style={Styles.logoNavbar} />
          </NavbarHeading>
        </NavbarGroup>
        <NavbarGroup align={Alignment.LEFT}>
          <Navbar.Divider />

          <Popover content={this.FileMenu()} position={Position.BOTTOM}>
            <Button minimal={true} icon="document" text="文件" />
          </Popover>

          {showProjectMenu ? (
            <Popover content={this.ProjectMenu()} position={Position.BOTTOM}>
              <Button minimal={true} icon="code-block" text="项目" />
            </Popover>
          ) : null}

          <Popover content={this.SystemMenu()} position={Position.BOTTOM}>
            <Button minimal={true} icon="applications" text="系统" />
          </Popover>
        </NavbarGroup>
        <NavbarGroup align={Alignment.RIGHT}>
          <Navbar.Divider />

          <Button
            minimal={true}
            icon="user"
            text="未登录"
            onClick={() => {
              this.setState({ loginAlert: true });
            }}
          />
          <Alert
            canEscapeKeyCancel={false}
            canOutsideClickCancel={false}
            confirmButtonText="确认"
            icon="warning-sign"
            isOpen={this.state.loginAlert}
            onClose={() => {
              this.setState({
                loginAlert: false
              });
            }}
          >
            <p>
              本版本暂不支持用户登录,
              有关Release信息请访问http://www.xxXxx.com/releasenotes
            </p>
          </Alert>
        </NavbarGroup>
      </Navbar>
    );
  }
}

// Default props
AppNavbar.defaultProps = {};

// Prop attributes types
AppNavbar.propTypes = {};

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
  updateAboutDialogStatus: status => dispatch(updateAboutDialogStatus(status)),
  updateWizardStatus: status => dispatch(updateWizardStatus(status))
});

// Export Home container
export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false }
)(AppNavbar);
