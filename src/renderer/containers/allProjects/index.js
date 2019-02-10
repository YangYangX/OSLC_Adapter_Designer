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
  ButtonGroup,
  Alert,
  Icon,
  Card,
  Intent,
  Callout,
  Toaster,
  Label,
  Dialog,
  Tooltip,
  Position,
  Navbar,
  Divider,
  EditableText,
  Checkbox,
  FormGroup,
  InputGroup,
  Pre,
  Tree,
  NavbarGroup,
  NavbarHeading,
  Menu,
  MenuDivider,
  MenuItem,
  Popover,
} from '@blueprintjs/core';
import { ItemRenderer, MultiSelect } from '@blueprintjs/select';

import {
  Grid,
  Button as SemanticButton,
  Table,
  Form,
  Label as Status,
  Icon as SemanticIcon,
} from 'semantic-ui-react';

import { appIcon, logoAbout, docIcon } from '../../asserts';

import AddNewProject from '../addNewProject';
// Style
import Styles from './style';

// Class Home, basic component for application
class AllProjects extends Component {
  state = {
    shareProjectalert: false,
    loginAlert: false,
    aboutDialogOpen: false,
    deleteAlert: false,
    addnewprojectDialog: false,
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

  _renderAboutDialog = () => {
    return (
      <Dialog
        icon="info-sign"
        title="关于"
        onClose={() => {
          this.setState({ aboutDialogOpen: false });
        }}
        autoFocus={true}
        canEscapeKeyClose={false}
        canOutsideClickClose={false}
        enforceFocus={true}
        isOpen={this.state.aboutDialogOpen}
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

  _handleClickProject = () => {};

  handleNodeCollapse = nodeData => {
    nodeData.isExpanded = false;
  };

  handleNodeExpand = nodeData => {
    nodeData.isExpanded = true;
  };

  FileMenu = () => (
    <Menu>
      <MenuItem
        icon="folder-new"
        text="新建..."
        shouldDismissPopover={true}
        onClick={() => {
          this.setState({ addnewprojectDialog: true });
        }}
      />
      <MenuItem
        icon="panel-stats"
        text="所有项目"
        shouldDismissPopover={true}
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
          this.setState({ aboutDialogOpen: true });
        }}
      />
    </Menu>
  );

  render() {
    const { navTo } = this.props;
    return (
      <div style={Styles.screen}>
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

            <Popover content={this.ProjectMenu()} position={Position.BOTTOM}>
              <Button minimal={true} icon="code-block" text="项目" />
            </Popover>

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
                  loginAlert: false,
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

        <Grid centered style={Styles.container}>
          <Grid.Row>
            <Grid.Column width={3} style={Styles.leftSection} />
            <Grid.Column width={13} style={Styles.mainSection}>
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
                                label="项目ID"
                                placeholder="项目ID"
                              />
                              <Form.Input
                                fluid
                                label="项目名称"
                                placeholder="项目名称"
                              />
                            </Form.Group>
                            <Form.Group inline>
                              <label>在线状态</label>
                              <Form.Radio label="本地项目" value="offline" />
                              <Form.Radio label="在线项目" value="online" />
                            </Form.Group>
                            <Form.Button color={'green'}>
                              <SemanticIcon name="filter" />
                              查找
                            </Form.Button>
                          </Form>

                          <br />
                          <Divider />
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Grid.Column>
                  <Grid.Column width={16} style={Styles.workAreaMainTable}>
                    <Table celled selectable style={Styles.dataTable}>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell width={1}>在线</Table.HeaderCell>
                          <Table.HeaderCell width={4}>项目ID</Table.HeaderCell>
                          <Table.HeaderCell width={6}>
                            项目名称
                          </Table.HeaderCell>
                          <Table.HeaderCell width={3}>
                            更新时间
                          </Table.HeaderCell>
                          <Table.HeaderCell width={2}>操作</Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>

                      <Table.Body>
                        <Table.Row>
                          <Table.Cell textAlign={'center'}>
                            <Status circular color={'red'} empty />
                          </Table.Cell>
                          <Table.Cell>
                            71a15d1b-1b09-4bec-9de7-0202160c19f3
                          </Table.Cell>
                          <Table.Cell>测试项目</Table.Cell>
                          <Table.Cell>2019-02-10 08:00:00</Table.Cell>
                          <Table.Cell>
                            <ButtonGroup
                              fill={false}
                              alignText={Alignment.CENTER}
                            >
                              <Button
                                icon="document-open"
                                intent={Intent.SUCCESS}
                                onClick={() => {
                                  this.props.navTo('/editor');
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
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {this._renderAboutDialog()}
        {this._renderDeleteProjectAlert()}
        <AddNewProject isOpen={this.state.addnewprojectDialog} />
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
});

// Export Home container
export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false }
)(AllProjects);
