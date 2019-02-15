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
  ButtonGroup,
  Alert,
  Intent,
  Callout,
  Tooltip,
  Divider,
  NonIdealState
} from "@blueprintjs/core";
import { ItemRenderer, MultiSelect } from "@blueprintjs/select";

import {
  Grid,
  Button as SemanticButton,
  Table,
  Form,
  Label as Status,
  Icon as SemanticIcon
} from "semantic-ui-react";

import { updateWizardStatus } from "../addNewProject/actions";

import AppNavbar from "../appNavbar";
import AddNewProject from "../addNewProject";
import About from "../about";
import Overlay from "../overlay";
// Style
import Styles from "./style";

// Class Home, basic component for application
class AllProjects extends Component {
  state = {
    shareProjectalert: false,
    loginAlert: false,
    deleteAlert: false
  };
  /**
   * constructor function
   * @param {*} props
   */
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  _NonIdealStateForEmptyProjectList = () => {
    const { updateWizardStatus } = this.props;
    return (
      <div>
        <br />
        <br />
        <NonIdealState
          icon={"search"}
          title={<p style={Styles.nonidealStateMainTitle}>没有发现项目</p>}
          description={
            <p style={Styles.nonidealStateMainDesc}>
              要开始一个新的OSLC适配器代码生成项目，请先在项目创建引导界面中创建项目，
              然后根据界面上显示的设置完成对OSLC适配器的设计，完成项目后，可编译项目生成
              用于产生java代码的json文件，或直接生成java代码包.
            </p>
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
      </div>
    );
  };

  _allProjectList = () => {
    return (
      <Table celled selectable style={Styles.dataTable}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={1}>在线</Table.HeaderCell>
            <Table.HeaderCell width={4}>项目ID</Table.HeaderCell>
            <Table.HeaderCell width={6}>项目名称</Table.HeaderCell>
            <Table.HeaderCell width={3}>更新时间</Table.HeaderCell>
            <Table.HeaderCell width={2}>操作</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell textAlign={"center"}>
              <Status circular color={"red"} empty />
            </Table.Cell>
            <Table.Cell>71a15d1b-1b09-4bec-9de7-0202160c19f3</Table.Cell>
            <Table.Cell>测试项目</Table.Cell>
            <Table.Cell>2019-02-10 08:00:00</Table.Cell>
            <Table.Cell>
              <ButtonGroup fill={false} alignText={Alignment.CENTER}>
                <Button
                  icon="document-open"
                  intent={Intent.SUCCESS}
                  onClick={() => {
                    this.props.navTo("/editor");
                  }}
                >
                  打开
                </Button>
                <Button
                  icon="trash"
                  intent={Intent.DANGER}
                  onClick={() => {
                    this.setState({ deleteAlert: true });
                  }}
                >
                  删除
                </Button>
              </ButtonGroup>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  };

  _renderDeleteProjectAlert = () => {
    return (
      <Alert
        canEscapeKeyCancel={false}
        canOutsideClickCancel={false}
        cancelButtonText="取消"
        confirmButtonText="删除"
        icon="trash"
        intent={Intent.DANGER}
        isOpen={this.state.deleteAlert}
        onCancel={this.handleDeleteCancel}
        onConfirm={this.handleDeleteConfirm}
      >
        <p>确定要将项目 "测试项目" 移除吗?</p>
      </Alert>
    );
  };

  handleDeleteCancel = () => {
    this.setState({ deleteAlert: false });
  };

  handleDeleteConfirm = () => {
    this.setState({ deleteAlert: false });
  };

  _handleClickProject = () => {};

  handleNodeCollapse = nodeData => {
    nodeData.isExpanded = false;
  };

  handleNodeExpand = nodeData => {
    nodeData.isExpanded = true;
  };

  render() {
    const { navTo } = this.props;
    return (
      <div style={Styles.screen}>
        <AppNavbar />

        <Grid centered style={Styles.container}>
          <Grid.Row>
            <Grid.Column width={16} style={Styles.mainSection}>
              <Grid>
                <Grid.Row style={Styles.workAreaMain}>
                  <Grid.Column width={16} style={Styles.workAreaMainTop}>
                    <Grid>
                      <Grid.Row>
                        <Grid.Column
                          width={8}
                          style={Styles.workAreaMainTopHalf}
                        >
                          <p style={Styles.workAreaTitle}>项目列表</p>
                        </Grid.Column>

                        <Grid.Column
                          width={8}
                          style={Styles.workAreaMainTop1}
                        />
                        <Grid.Column width={16} style={Styles.workAreaMainTop2}>
                          <Divider />
                          <br />

                          <Form>
                            <Form.Group widths="equal">
                              <Form.Input
                                fluid
                                label="项目ID:"
                                placeholder="项目ID"
                              />
                              <Form.Input
                                fluid
                                label="项目名称:"
                                placeholder="项目名称"
                              />
                            </Form.Group>
                            <Form.Group inline>
                              <label>在线状态:</label>
                              <Form.Radio
                                label="本地项目"
                                value="offline"
                                checked={true}
                              />
                              <Tooltip
                                content={
                                  "本版本暂不支持在线项目管理,有关Release信息请访问http://www.xxXxx.com/releasenotes"
                                }
                              >
                                <Form.Radio
                                  label="在线项目"
                                  value="online"
                                  checked={false}
                                  disabled={true}
                                />
                              </Tooltip>
                            </Form.Group>
                            <Button
                              icon="search"
                              intent={Intent.SUCCESS}
                              onClick={() => {
                                updateWizardStatus(true);
                              }}
                            >
                              查找
                            </Button>
                          </Form>

                          <br />
                          <Divider />
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Grid.Column>
                  <Grid.Column width={16} style={Styles.workAreaMainTable}>
                    {this._NonIdealStateForEmptyProjectList()}
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {this._renderDeleteProjectAlert()}
        <AddNewProject />
        <About />
        <Overlay />
      </div>
    );
  }
}

// Default props
AllProjects.defaultProps = {};

// Prop attributes types
AllProjects.propTypes = {};

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
  updateWizardStatus: status => dispatch(updateWizardStatus(status))
});

// Export Home container
export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false }
)(AllProjects);
