/**
 *
 * home page
 *
 * This component is the home page not found page.
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { push } from "connected-react-router";
import _ from "lodash";
import queryString from "query-string";

// UI Framework
import {
  Button,
  ContextMenu,
  NonIdealState,
  Intent,
  Menu,
  MenuDivider,
  MenuItem
} from "@blueprintjs/core";

import { Grid, Button as SemanticButton, Tab } from "semantic-ui-react";

// Style
import Styles from "./style";

// Components
import AppNavbar from "../appNavbar";
import AddNewProject from "../addNewProject";
import About from "../about";
import Overlay from "../overlay";

// Actions
import { updateWizardStatus } from "../addNewProject/actions";
import { updateAboutDialogStatus } from "../about/actions";

// Class Home, basic component for application
class Editor extends Component {
  /**
   * constructor function
   * @param {*} props
   */
  constructor(props) {
    super(props);
  }

  _NonIdealState = () => {
    const { updateWizardStatus } = this.props;
    return (
      <NonIdealState
        icon={"folder-open"}
        title={<p style={Styles.nonidealStateDesc}>新建项目</p>}
        description={
          <p style={Styles.nonidealStateDesc}>创建一个新的OSLC适配器项目</p>
        }
        action={
          <Button
            icon="new-object"
            intent={Intent.PRIMARY}
            onClick={() => {
              updateWizardStatus(true);
            }}
          >
            新建项目
          </Button>
        }
      />
    );
  };

  _NonIdealStateForProjectSetting = () => {
    return (
      <div>
        <br />
        <br />
        <NonIdealState
          icon={"cog"}
          title={<p style={Styles.nonidealStateMainTitle}>项目设置</p>}
          description={
            <p style={Styles.nonidealStateMainDesc}>
              要开始一个新的OSLC适配器代码生成项目，请先在项目创建引导界面中创建项目，
              然后根据界面上显示的设置完成对OSLC适配器的设计，完成项目后，可编译项目生成
              用于产生java代码的json文件，或直接生成java代码包.
            </p>
          }
        />
      </div>
    );
  };

  componentDidMount() {
    const { location } = this.props;
    const { updateWizardStatus } = this.props;
    // Check if create new project windows should be poped up
    if (
      "createnew" ==
      (_.has(queryString.parse(location.search), "extra")
        ? queryString.parse(location.search).extra
        : null)
    ) {
      updateWizardStatus(true);
    }
  }

  _handleClickProject = () => {};

  handleNodeCollapse = nodeData => {
    nodeData.isExpanded = false;
  };

  handleNodeExpand = nodeData => {
    nodeData.isExpanded = true;
  };

  showContextMenu = (node, pos, e) => {
    ContextMenu.show(
      <Menu>
        <MenuItem icon="flow-linear" text="添加 Service" />
        <MenuItem icon="flow-end" text="添加 Provider" />
        <MenuDivider title={"编辑"} />
        <MenuItem icon="graph-remove" text="删除" />
        <MenuItem icon="cog" text="设置" />
      </Menu>,
      { left: e.clientX, top: e.clientY }
    );
  };

  render() {
    const { navTo } = this.props;
    return (
      <div style={Styles.screen}>
        <AppNavbar />
        <Grid centered style={Styles.container}>
          <Grid.Row>
            <Grid.Column width={3} style={Styles.leftSection}>
              <Tab
                grid={{ paneWidth: 12, tabWidth: 6 }}
                panes={[
                  {
                    menuItem: {
                      key: "service",
                      icon: "file code outline",
                      content: "服务"
                    },
                    render: () => (
                      <Tab.Pane as="div" style={Styles.tabContent}>
                        {this._NonIdealState()}
                      </Tab.Pane>
                    )
                  },
                  {
                    menuItem: {
                      key: "resource",
                      icon: "file alternate outline",
                      content: "资源"
                    },
                    render: () => (
                      <Tab.Pane as="div" style={Styles.tabContent} />
                    )
                  }
                ]}
              />
            </Grid.Column>
            <Grid.Column width={13} style={Styles.mainSection}>
              <Grid>
                <Grid.Row style={Styles.workAreaMain}>
                  <Grid.Column
                    width={16}
                    style={Styles.mainSectionTitleContainer}
                  >
                    {this._NonIdealStateForProjectSetting()}
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <AddNewProject />
        <About />
        <Overlay />
      </div>
    );
  }
}

// Default props
Editor.defaultProps = {};

// Prop attributes types
Editor.propTypes = {};

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
  updateWizardStatus: status => dispatch(updateWizardStatus(status)),
  updateAboutDialogStatus: status => dispatch(updateAboutDialogStatus(status))
});

// Export Home container
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { pure: false }
  )(Editor)
);
