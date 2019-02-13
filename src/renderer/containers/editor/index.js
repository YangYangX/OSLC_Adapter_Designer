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
  ContextMenu,
  Pre,
  Tree,
  NavbarGroup,
  NavbarHeading,
  Menu,
  MenuDivider,
  MenuItem,
  Popover
} from "@blueprintjs/core";
import { ItemRenderer, MultiSelect } from "@blueprintjs/select";

import { Grid, Button as SemanticButton, Tab } from "semantic-ui-react";

import { appIcon, logoAbout, docIcon } from "../../asserts";

// Style
import Styles from "./style";

// Components
import AddNewProject from "../addNewProject";

// Actions
import { updateWizardStatus } from "../addNewProject/actions";

// Class Home, basic component for application
class Editor extends Component {
  state = {
    shareProjectalert: false,
    loginAlert: false,
    aboutDialogOpen: false,
    addnewprojectDialog: false
  };
  selectedProject = "oslcBlankProject";
  selectedProjectDesc =
    "普通OSLC Adapter适配器空白项目，项目初始化包含一个Root Service，在项目创建过程中可添加其他Service以及Provider，并在项目中定义Resource。";
  INITIAL_STATE = [
    {
      id: 1,
      icon: "folder-close",
      label: "Root Service",

      isExpanded: true,
      childNodes: [
        {
          id: 2,
          icon: "document",
          label: "Provider 1"
        },
        {
          id: 3,
          icon: "document",
          label: "Provider 2"
        },
        {
          id: 4,
          hasCaret: true,
          isSelected: true,
          icon: "folder-close",
          label: "Service 3",
          isExpanded: true,
          childNodes: [
            {
              id: 5,
              icon: "document",
              label: "Provider 1"
            },
            {
              id: 6,
              icon: "document",
              label: "Provider 2"
            },
            {
              id: 7,
              hasCaret: true,
              icon: "folder-close",
              label: "Service 4",
              isExpanded: true,
              childNodes: [{ id: 8, icon: "document", label: "Provider 4" }]
            }
          ]
        }
      ]
    }
  ];
  /**
   * constructor function
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this._renderAboutDialog = this._renderAboutDialog.bind(this);
    this.FileMenu = this.FileMenu.bind(this);
  }

  componentDidMount() {}
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
                        <Tree
                          contents={this.INITIAL_STATE}
                          onNodeCollapse={this.handleNodeCollapse}
                          onNodeExpand={this.handleNodeExpand}
                          onNodeContextMenu={this.showContextMenu}
                        />
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
                      <Tab.Pane as="div" style={Styles.tabContent}>
                        TODO: 资源列表
                      </Tab.Pane>
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
                    <span style={Styles.mainSectionTitle}>设置</span>
                    <Divider />
                    <br />
                    <Callout
                      intent={Intent.WARNING}
                      title={"提示信息"}
                      icon="info-sign"
                    >
                      放置一些提示信息， 放置一些提示信息， 放置一些提示信息，
                      放置一些提示信息， 放置一些提示信息， 放置一些提示信息，
                      放置一些提示信息， 放置一些提示信息， 放置一些提示信息，
                      放置一些提示信息， 放置一些提示信息， 放置一些提示信息，
                    </Callout>
                    <br />
                    <FormGroup
                      helperText="Service名称."
                      label="Service名称"
                      labelFor="text-input"
                      labelInfo="(*必须)"
                    >
                      <InputGroup id="text-input" placeholder="Service1" />
                    </FormGroup>
                    <FormGroup
                      helperText="Service ID是由系统自动生成的唯一标识码."
                      label="Service ID"
                      labelFor="text-input"
                      labelInfo="(*必须)"
                    >
                      <InputGroup
                        disabled={true}
                        id="text-input"
                        placeholder="Service ca716a9e-747b-48ed-89b2-10f53753875d"
                      />
                    </FormGroup>
                    <FormGroup
                      helperText="Service相关字段."
                      label="Service其他字段"
                      labelFor="text-input"
                      labelInfo=""
                    >
                      <InputGroup id="text-input" placeholder="其他字段" />
                    </FormGroup>
                    <Divider />
                    <Label>一组选项：</Label>
                    <Checkbox>某个选项1</Checkbox>
                    <Checkbox>某个选项2</Checkbox>
                    <Checkbox>某个选项3</Checkbox>
                    <Checkbox>某个选项4</Checkbox>
                    <Divider />
                    <Label>资源:</Label>

                    <br />
                    <div style={{ textAlign: "right" }}>
                      <Button intent={Intent.SUCCESS} icon="floppy-disk">
                        保存
                      </Button>
                    </div>
                    <br />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {this._renderAboutDialog()}
        <AddNewProject isOpen={this.state.addnewprojectDialog} />
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
  updateWizardStatus: status => dispatch(updateWizardStatus(status))
});

// Export Home container
export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false }
)(Editor);
