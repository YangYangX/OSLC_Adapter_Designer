/**
 *
 * home page
 *
 * This component is the home page not found page.
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import _ from "lodash";

// UI Framework
import {
  ResizeSensor,
  Alignment,
  Button,
  Classes,
  Icon,
  Position,
  Intent,
  Toaster,
  Dialog,
  Tooltip,
  AnchorButton,
  Navbar,
  Divider,
  NavbarGroup,
  NavbarHeading
} from "@blueprintjs/core";

import { Grid, List } from "semantic-ui-react";

import { logoAbout, appIcon } from "../../asserts";

// Style
import Styles from "./style";

const { ipcRenderer } = window.require("electron");

// Class Home, basic component for application
class Home extends Component {
  state = {
    isOpen: false,
    size: {
      width: 0,
      height: 0
    }
  };
  /**
   * constructor function
   * @param {*} props
   */
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const { navTo } = this.props;

    return (
      <div style={Styles.screen}>
        <div>
          <Grid centered style={Styles.container}>
            <Grid.Row>
              <Grid.Column width={16}>
                <p style={Styles.appIconContainer}>
                  <img src={appIcon} style={Styles.appIcon} />
                </p>
              </Grid.Column>

              <Grid.Column width={16}>
                <p style={Styles.appTitleContainer}>OSLC Adapter 设计器</p>
                <p style={Styles.appSubTitleContainer}>版本1.0.0.A</p>
              </Grid.Column>
              <Grid.Column width={4} style={Styles.actionContainer}>
                <List>
                  <List.Item>
                    <Button
                      style={Styles.actionButton}
                      alignText={Alignment.LEFT}
                      large={true}
                      minimal={true}
                      icon={"cube-add"}
                      onClick={() => {
                        ipcRenderer.send("coreCentAppChannel-async", {
                          view: "editor",
                          extra: "createnew"
                        });
                      }}
                    >
                      创建新项目
                    </Button>
                  </List.Item>
                  <List.Item>
                    <Button
                      style={Styles.actionButton}
                      alignText={Alignment.LEFT}
                      large={true}
                      minimal={true}
                      icon={"document-open"}
                      onClick={() => {
                        ipcRenderer.send("coreCentAppChannel-async", {
                          view: "allprojects"
                        });
                      }}
                    >
                      打开项目
                    </Button>
                  </List.Item>

                  <List.Item>
                    <Button
                      style={Styles.actionButton}
                      alignText={Alignment.LEFT}
                      large={true}
                      minimal={true}
                      icon={"lifesaver"}
                    >
                      帮助
                    </Button>
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row style={Styles.appFooterContainer}>
              <Grid.Column width={8}>
                <div style={Styles.appFooterLeftSection} />
              </Grid.Column>

              <Grid.Column width={8}>
                <div style={Styles.appFooterRightSection}>
                  <Button
                    alignText={Alignment.LEFT}
                    minimal={true}
                    icon={"cog"}
                    rightIcon={"chevron-down"}
                    small={true}
                  >
                    设置
                  </Button>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}

// Default props
Home.defaultProps = {};

// Prop attributes types
Home.propTypes = {};

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
  navTo: location => dispatch(push(location))
});

// Export Home container
export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false }
)(Home);
